import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import * as TWEEN from '@tweenjs/tween.js';
import gsap from 'gsap';

// 初回訪問判定フラグ
export let first_visit = true;

const links = document.querySelectorAll('a');

// // ローディング画面の表示
export const loading_background = document.getElementById("loading");

export class Surround {
  constructor() {

    // canvasのmargin-topにheaderの高さを設定
    this.header_height = document.getElementById("header_nav").clientHeight;

    // canvasのmargin-topにheaderの高さを設定
    this.canvas_element = document.getElementById('webgl');

    // 透過黒レイヤー（hidden_cover）の高さ調整
    const company_section_height = document.getElementById("company_section").clientHeight;
    const hidden_cover = document.getElementById("hidden_cover");
    hidden_cover.style.height = (company_section_height + hidden_cover.clientHeight) + "px";

    window.addEventListener('load', this.blackOut.bind(this));
    window.addEventListener('scroll', this.blackOut.bind(this));
    
    
    // リサイズ時の処理（3D表示以外の調整）
    window.addEventListener('resize', () => {
      this.setMainHeight();
      this.blackOut();
    });
  }

  callFunctions() {
    this.setMainHeight();
    this.blackOut();
  }

  setMainHeight() {
    // // canvasのmargin-topにheaderの高さを設定
    this.header_height = document.getElementById("header_nav").clientHeight;

    if (this.canvas_element) {
      this.canvas_element.style.marginTop = this.header_height + "px";
    }
  }

  blackOut() {

    // コンテンツ位置までスクロールしたら暗くする
    const dark_cover = document.getElementById('hidden_cover');
    const key_visual = document.getElementById("key-visual");
    let key_visual_bottom = key_visual.getBoundingClientRect().bottom + window.pageYOffset;
    let target_static = key_visual_bottom - (window.innerHeight * 0.88);

    if (window.scrollY >= target_static) {
      dark_cover.style.opacity = .5;
      dark_cover.style.visibility = "visible";
    } else if (window.scrollY < target_static) {
      dark_cover.style.opacity = 0;
      dark_cover.style.visibility = "invisible";
    }
  }
}

export class Sketch {
  constructor() {

    // シーンの作成
    this.scene = new THREE.Scene();


    // キャンバスの作成
    this.canvas = document.createElement("canvas");

    // リサイズ後のウィンドウサイズ
    this.resized_width = window.innerWidth;
    this.resized_height = window.innerHeight;


    // カメラの作成
    this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1500 );

    // カメラ位置設定
    this.camera.position.x = 0;
    this.camera.position.y = 30;


    // レンダラーの作成
    this.renderer = new THREE.WebGLRenderer();

    // レンダラーの高さ
    this.renderer.setSize( this.width, this.height -  this.header_height);
    this.renderer.physicallyCorrectLights = true;

    this.renderScene = new RenderPass( this.scene, this.camera );

    this.bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
    this.bloomPass.threshold = 0.0;
    this.bloomPass.strength = 0.0;
    this.bloomPass.radius = 0.0;


    this.composer = new EffectComposer( this.renderer );
    this.composer.addPass( this.renderScene );
    this.composer.addPass( this.bloomPass );


    // キャンバスをDOMツリーに追加
    this.wrapper = document.querySelector("#webgl");
    if (this.wrapper) {
      this.wrapper.appendChild(this.renderer.domElement);
    }

    // アニメーション速度の調整用
    this.clock = new THREE.Clock();


    // フェードインを何段階で実行するか
    this.fadein_times = 4;
    // フェードインの速度（フェードイン完了まで fadein_times × interval_time）
    this.interval_time = 500;
    // ガイドを表示するまでの時間
    this.show_guide_time = this.fadein_times*this.interval_time+3500


    // クリック許可フラグ
    this.click_flag = false;

    // オブジェクト移動許可フラグ
    this.moving_flag = false;

    // raycaster検知フラグ
    this.detection = false;

    // 自動アニメーション停止フラグ
    this.stopDiffusion = false;

    // パーティクルフラグ
    this.slide_flag = false;


    // パーティクルの頂点座標
    this.particle_pos = new THREE.Vector2();


    this.time = 0;
    this.move = 0;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.point = new THREE.Vector2();
    this.clickable = false;

    
  }

  callFunctions() {
    if(first_visit) {
      this.img.addEventListener('load', () => {
        this.init();
        this.mouseInteraction();
        this.animate();
        this.showGuide();
        this.setSize();
        this.resize();
      });
    } else {
      this.init();
      this.mouseInteraction();
      this.animate();
      this.showGuide();
      this.setSize();
      this.resize();
    }
  }

  setImage() {
    // 画像要素を生成
    this.img = new Image();

    // 表示させる画像のパスを指定
    if (typeof window.ontouchstart === "undefined") {
      // PCの処理
      this.img.src = "../img/logo_color.png";
    } else {
      // スマホの処理
      this.img.src = "../img/logo_color_small.png";
    }
    this.img.crossOrigin = "anonymous";
  }

  init() {
    // オブジェクトをシーンに追加
    this.addObjects();


    // ローディング画面除去
    this.removeLoadingEnd();

    // フェードイン実行（FadeIn関数）
    this.fadeIn(this.fadein_times-1, this.interval_time);

    // フラグ反転
    window.setTimeout(function(){this.click_flag = !this.click_flag}.bind(this), this.fadein_times*this.interval_time);
    window.setTimeout(function(){this.moving_flag = !this.moving_flag}.bind(this), this.fadein_times*this.interval_time);
    window.setTimeout(function(){this.clickable = !this.clickable}.bind(this), this.fadein_times*this.interval_time+5000);
    
    // 初期アニメーション　パターン1
    // サイト表示後、拡散したパーティクルが集合する
    // this.gatherFromFar();

    // 初期アニメーション　パターン2
    // サイト表示後、拡散したパーティクルが集合する
    this.gather2D();

    // 初期アニメーション　パターン3
    // サイト表示後、拡散したパーティクルが集合する
    // this.gather3D();

    window.setTimeout(() => {

      this.lightOn();

    }, this.fadein_times*this.interval_time + 1000);

    window.setTimeout(() => {
      
      // ロードから一定時間経過後、自動でパーティクルを拡散
      window.setInterval(this.autoDiffusion.bind(this), 1000);

      // ウィンドウが非アクティブの場合、アニメーション停止
      window.addEventListener('blur', () => {
        this.stopDiffusion = !this.stopDiffusion;
      });
    
      // ウィンドウがアクティブの場合、アニメーション再開
      window.addEventListener('focus', () => {
        this.stopDiffusion = !this.stopDiffusion;
      });  

    }, this.show_guide_time + 500);
  }

  addObjects() {
    // ジオメトリーの作成
    this.geometry = new THREE.BufferGeometry();

    // 画像の変換（ImagePixel関数）
    this.pixcel_img = this.ImagePixel(this.img, this.img.width, this.img.height, 2.0);
    
    // 変換後の画像の頂点座標情報抽出
    const position = new THREE.BufferAttribute(
      new Float32Array(this.pixcel_img.position),
      3
    );

    // 変換後の画像の色情報抽出
    const color = new THREE.BufferAttribute(
      new Float32Array(this.pixcel_img.color),
      3
    );
    
    // 変換後の画像の透明度情報抽出
    const alpha = new THREE.BufferAttribute(
      new Float32Array(this.pixcel_img.alpha),
      1
    );
      
    // ランダム値の生成
    const rand = [];
    this.vertces = this.pixcel_img.position.length / 3;  // 頂点の数
    for (let i = 0; i < this.vertces; i++) {
      rand.push((Math.random() - 1.0) * 2.0, (Math.random() - 1.0) * 2.0);
    }
    const rands = new THREE.BufferAttribute(new Float32Array(rand), 2);

    // オブジェクト移動許可フラグの生成
    const flag = [];
    for (let i = 0; i < this.vertces; i++) {
      flag.push(1);
    }
    const flags = new THREE.BufferAttribute(new Float32Array(flag), 1);

    const speed = [];
    for (let i = 0; i < this.vertces; i++) {
      speed.push(random(-1000, 1000));
    }
    const speeds = new THREE.BufferAttribute(new Float32Array(speed), 1);

    const offset = [];
    for (let i = 0; i < this.vertces; i++) {
      offset.push(random(0.4, 1));
    }
    const offsets = new THREE.BufferAttribute(new Float32Array(offset), 1);

    const press = [];
    for (let i = 0; i < this.vertces; i++) {
      press.push(random(0.4, 1));
    }
    const presses = new THREE.BufferAttribute(new Float32Array(press), 1);

    const direction = [];
    for (let i = 0; i < this.vertces; i++) {
      direction.push(Math.random() > 0.5 ? 1 : -1);
    }
    const directions = new THREE.BufferAttribute(new Float32Array(direction), 1);
    
    // 各パラメータをジオメトリーに登録
    this.geometry.setAttribute("position", position);
    this.geometry.setAttribute("color", color);
    this.geometry.setAttribute("alpha", alpha);
    this.geometry.setAttribute("rand", rands);
    this.geometry.setAttribute("flag", flags);

    this.geometry.setAttribute("aSpeed", speeds);
    this.geometry.setAttribute("aOffset", offsets);
    this.geometry.setAttribute("aPress", presses); 
    this.geometry.setAttribute("aDirection", directions); 


    // マテリアルの作成
    this.material = new THREE.RawShaderMaterial({

      // シェーダーの設定
      vertexShader: document.querySelector("#js-vertex-shader").textContent,
      fragmentShader: document.querySelector("#js-fragment-shader").textContent,
      uniforms: {
        u_ratio: { type: "f", value: 0.0 },
        u_time: { type: "f", value: 0.0 },
        u_value: { type: "f", value: 0.0 },
        pointTexture: { value: new THREE.TextureLoader().load( '../img/triangle.png' ) },
        mouse: { type: "v2", value: new THREE.Vector2(0., 0.) },
        mousePressed: {type: "f", value: 0},
        move: {type: "f", value: 0},
        time: {type: "f", value: 0},
        mousePressed: {type: "f", value: 0},
        diffusionScale: {type: "f", value: 0},
        circleScale: {type: "f", value: 0},
      },
      transparent: true,
      // blending: THREE.AdditiveBlending,
      depthTest: false
    });

    // オブジェクトの作成
    this.mesh = new THREE.Points(this.geometry, this.material);

    this.scene.add( this.mesh );
  }

  ImagePixel(path, w, h, ratio) {

    // canvasの設定
    this.ctx = this.canvas.getContext("2d");
    this.canvas_width = w;
    this.canvas_height = h;
    this.canvas.width = this.canvas_width;
    this.canvas.height = this.canvas_height;

    // 画像データの描画
    this.ctx.drawImage(path, 0, 0);
    this.data = this.ctx.getImageData(0, 0, this.canvas_width, this.canvas_height).data;
    // 座標情報
    this.position = [];
    // 色情報
    this.color = [];
    // 透明度
    this.alpha = [];

    for (let y = 0; y < this.canvas_height; y += ratio) {
      for (let x = 0; x < this.canvas_width; x += ratio) {

        // 配列内の任意の[x、y]ピクセルの位置を取得
        this.index = (y * this.canvas_width + x) * 4;

        // webglは原点が中心となり、xは右がプラス左がマイナス。yは上がプラス下がマイナス。
        this.pX = x - this.canvas_width / 2;
        this.pY = -(y - this.canvas_height / 2);
        this.pZ = 0;


        this.r = this.data[this.index + 0] / 255;
        this.g = this.data[this.index + 1] / 255;
        this.b = this.data[this.index + 2] / 255;


        // webglでは透明度を0~1の範囲で表現するので、255で割って数値を0~1の範囲に変換
        this.a = this.data[this.index + 3] / 255;
        
        // 座標、色、透明度の値を配列に追加
        if (this.a > 0.5) {
          this.position.push(this.pX, this.pY, this.pZ), this.color.push(this.r, this.g, this.b), this.alpha.push(this.a);
        }
      }
    }

    return { position: this.position, color: this.color, alpha: this.alpha };

  }

  removeLoadingEnd() {
    // 初回訪問時
    if (first_visit) {

        // if (is_bottom) {

        //   // ロード画面を表示
        //   loading_background.style.opacity = 1;
      
        // } 

        // ロード画面を非表示
        loading_background.style.opacity = 0;
        loading_background.style.visibility = "invisible";
      
        first_visit = !first_visit
      
      }
  }

  fadeIn(sampling_time, interval_time) {

      // パーティクルの透明度の配列
      const particleAlpha = this.mesh.geometry.attributes.alpha.array;
      // パーティクルの移動許可フラグの配列
      const particleFlag = this.mesh.geometry.attributes.flag.array;

      // 透明ではないパーティクルの透明度を下げて見えなくする
      for (let i=0; i < this.vertces; i++) {
        if(particleAlpha[i] > 0) {
          particleAlpha[i] = 0.5 ** 6;
        }
      }

      // 透過させたパーティクルをランダムに複数回サンプリングして透明度を下げていく
      for (let i=0; i < sampling_time; i++) {
        for (let j=0; j < this.vertces; j++) {
          let random = (j + Math.floor(Math.random() * 2) + 1);
          if(particleAlpha[random] > 0) {
            particleAlpha[random] = 0.5 ** (i + 7);
          }
        }
      }

      // パーティクルの全頂点をTween.jsによりアニメーションさせる
      for (let i = 0; i < this.vertces; i++) {
        let vertex = {x: particleAlpha[i], y: particleFlag[i]};
        let tween = new TWEEN.Tween(vertex);
        tween.to({x: 1, y: 1}, interval_time+1000);

        // 透明度の低いパーティクルから順番に出現させる
        for (let j = 0; j < sampling_time + 1; j++) {
          if (particleAlpha[i] === 0.5 **  (j + 6)) {
            tween.delay(j * (interval_time));
            tween.start();
          }
        }
        tween.onUpdate(function(object) {
            particleAlpha[i] = object.x;
            particleFlag[i] = object.y;
        });
        
      }  
  }

  gatherFromFar() {
      gsap.set(this.mesh.material.uniforms.u_ratio, {
        value: 10000.0,
      });
      
      window.setTimeout(() => {
        gsap.to(this.mesh.material.uniforms.u_ratio, {
          value: 0.0,
          duration: 5,
          ease: "power4.out",
        })
      }, 0);
  }

  gather2D() {

      // ジオメトリの頂点座標の配列
      let attribute = this.mesh.geometry.attributes.position;
      // パーティクルの座標配列
      const particlePositions = this.mesh.geometry.attributes.position.array;

      for (let i = 0; i < this.vertces; i++) {
        particlePositions[3*i] = randomNumbers(600, 0) * plusMinus();
        particlePositions[3*i+1] = randomNumbers(600, 0) * plusMinus();
    
        // パーティクルの座標
        this.particle_pos.x = attribute.getX(i)*(500/this.camera.position.z) - 8;
        this.particle_pos.y = attribute.getY(i)*(500/this.camera.position.z) + 8
    
        // オブジェクト頂点座標
        let vertex_position = {x: attribute.getX(i), y: attribute.getY(i)};
    
        let gathering2d = new TWEEN.Tween(vertex_position);
        gathering2d.to({x:this.pixcel_img.position[3*i], y: this.pixcel_img.position[3*i+1]},3000);
        gathering2d.easing( TWEEN.Easing.Quadratic.Out );
        gathering2d.onUpdate(function (object) {
          particlePositions[3*i] = object.x;
          particlePositions[3*i+1] = object.y;
        });
        gathering2d.start();
      }
  }

  gather3D() {

      // ジオメトリの頂点座標の配列
      let attribute = this.mesh.geometry.attributes.position;
      // パーティクルの座標配列
      const particlePositions = this.mesh.geometry.attributes.position.array;

      for (let i = 0; i < this.vertces; i++) {
        particlePositions[3*i] = randomNumbers(600, 0) * plusMinus();
        particlePositions[3*i+1] = randomNumbers(600, 0) * plusMinus();
        particlePositions[3*i+2] = 500;
    
        // パーティクルの座標
        this.particle_pos.x = attribute.getX(i)*(500/this.camera.position.z) - 8;
        this.particle_pos.y = attribute.getY(i)*(500/this.camera.position.z) + 8;
        this.particle_pos.z = attribute.getZ(i)*(500/this.camera.position.z);
    
        // オブジェクト頂点座標
        let vertex_position = {x: attribute.getX(i), y: attribute.getY(i), z: attribute.getZ(i)};
    
        let gathering3d = new TWEEN.Tween(vertex_position);
        gathering3d.to({x: this.pixcel_img.position[3*i], y: this.pixcel_img.position[3*i+1], z: this.pixcel_img.position[3*i+2]},3000);
        gathering3d.easing( TWEEN.Easing.Quadratic.Out );
        gathering3d.onUpdate(function (object) {
          particlePositions[3*i] = object.x;
          particlePositions[3*i+1] = object.y;
          particlePositions[3*i+2] = object.z;
        });
        gathering3d.start();
      }
  }

    lightOn() {
    let bloomPass = {x: this.bloomPass.strength, y: this.bloomPass.radius};
    let tween = new TWEEN.Tween(bloomPass);
    tween.to({x: 0.5, y: 1.5}, 3000);
    tween.start();
    tween.onUpdate(function(object) {
      this.bloomPass.strength = object.x;
      this.bloomPass.radius = object.y;
    }.bind(this));
  }

  autoDiffusion() {
    // ランダム座標（自動拡散）
    let pos_range_plus = new THREE.Vector2();
    let pos_range_minus = new THREE.Vector2();
    // ランダム座標（自動拡散）
    let random_pos = new THREE.Vector2();
    // 疑似クリック座標（自動拡散）
    let random_pushed_pos = new THREE.Vector2();
    // 拡散方向決定用正負符号（自動拡散）
    let random_direction = new THREE.Vector2();
    // 疑似スライド距離
    let random_slide_distance = new THREE.Vector2();
    // パーティクル拡散時の到達座標
    let destination = new THREE.Vector2();


    // パーティクルの移動許可フラグの配列
    const particleFlag = this.mesh.geometry.attributes.flag.array;
    // パーティクルの座標配列
    const particlePositions = this.mesh.geometry.attributes.position.array;
    // オブジェクト座標＋エフェクト
    const params = {
      x1: this.mesh.position.x, y1: this.mesh.position.y, z1: this.mesh.position.z,
      x2: this.mesh.rotation.x, y2: this.mesh.rotation.y, z2: this.mesh.rotation.z,
      s: this.bloomPass.strength, r: this.bloomPass.radius
    };

    
    const targetForStop = document.getElementById("company_section").getBoundingClientRect().bottom + window.pageYOffset;

    // パスがトップページ以外の場合、タブが非アクティブの場合、アニメーション停止
    if (
      // !((location.pathname === "/ja/") | (location.pathname === "/en/")) | 
      // !((location.pathname === "/WebCorporate/ja/") | (location.pathname === "/WebCorporate/en/")) | 
      this.stopDiffusion | 
      (window.scrollY > targetForStop)
    ) {
      return;
    }


    // パーティクルが存在する座標範囲内を決定するための乱数生成
    pos_range_plus.x = randomNumbers(375, 0);
    pos_range_minus.x = -1 * randomNumbers(400, 0);
    pos_range_plus.y = randomNumbers(410, 0);
    pos_range_minus.y = -1 * randomNumbers(230, 0);


    // 疑似クリック・タップ座標値の生成
    random_pos.x = [pos_range_plus.x, pos_range_minus.x];
    random_pos.y = [pos_range_plus.y, pos_range_minus.y];
    
    random_pushed_pos.x = random_pos.x[Math.floor(Math.random() * random_pos.x.length)];
    random_pushed_pos.y = random_pos.y[Math.floor(Math.random() * random_pos.y.length)];


    // 疑似スライド距離の値を作成
    random_slide_distance.x = randomNumbers(200, 5) * plusMinus();
    random_slide_distance.y = randomNumbers(200, 5) * plusMinus();


    // パーティクルが一度に拡散する対象範囲
    let diameter = 20;
    
    // パーティクル拡散距離方向を決定するための乱数生成
    let random_numbers = randomNumbers(200, 50);
    let direction_coefs = [[Math.random(), Math.random()], [-1 * Math.random(), Math.random()], [Math.random(), -1 * Math.random()], [-1* Math.random(), -1 * Math.random()]]
    let direction_coef = direction_coefs[Math.floor(Math.random() * direction_coefs.length)];

    // x, y方向のために2種類生成
    let direction_coef_first = random_numbers * direction_coef[0];
    let direction_coef_second = random_numbers * direction_coef[1];
    
    
    if (this.click_flag) {
      for (let i = 0; i < this.vertces; i++) {

        // ジオメトリの頂点座標の配列
        let attribute = this.mesh.geometry.attributes.position;
        
        // パーティクルの座標
        let x = attribute.getX(i)*(500/this.camera.position.z) - 8;
        let y = attribute.getY(i)*(500/this.camera.position.z) + 8;
        
        let vertex_position = {x: attribute.getX(i), y: attribute.getY(i), z: particleFlag[i]};
        

        // 疑似クリック・タップ座標からパーティクルまでの距離
        let distance = Math.sqrt( Math.pow( x - random_pushed_pos.x, 2 ) + Math.pow( y - random_pushed_pos.y, 2 ) ) ;
        

        // パーティクルの拡散方向（上下左右の4通り）
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let direction = directions[Math.floor(Math.random() * directions.length)];
        
        random_direction.x = direction[0];
        random_direction.y = direction[1];
        

        // 疑似スライド時間の作成
        let random_slide_time = randomNumbers(110, 80) * 0.001;
        
        if (particleFlag[i] === 1) {
          
          // スライド開始座標からパーティクルまでの距離が30より小さい場合、拡散対象に設定
          if (distance < diameter) {
            
            particleFlag[i] = 0;

            // 減衰係数
            let attenuation_coefficient = randomNumbers(300, 280) * randomNumbers(1500, 1000);
  
            // パーティクル拡散時の到達座標
            destination.x = particlePositions[3*i] + (direction_coef_first) + (random_slide_distance.x / (random_slide_time * attenuation_coefficient));
            destination.y = particlePositions[3*i+1] + (direction_coef_second)  + (random_slide_distance.y / (random_slide_time * attenuation_coefficient));


            // パーティクル拡散のTweenアニメーション
            let auto_diffusion = new TWEEN.Tween(vertex_position);
            auto_diffusion.to({x: destination.x, y: destination.y, z: 0}, (random_slide_time*attenuation_coefficient));
            auto_diffusion.easing( TWEEN.Easing.Quadratic.Out );
            auto_diffusion.onUpdate(function (object) {
              particlePositions[3*i] = object.x;
              particlePositions[3*i+1] = object.y;
              particleFlag[i] = object.z;
            });
            auto_diffusion.repeat(1);
            auto_diffusion.yoyo(true);
            

            // オブジェクト移動のTweenアニメーション
            var auto_move = new TWEEN.Tween(params);
            auto_move.to({
                x1: destination.x / (random_slide_time*1000), y1: destination.y*(-1) / (random_slide_time*1000), z1: this.mesh.position.z + (2000 / (random_slide_time*500)), 
                x2: destination.y / 1000 * (-1), y2: destination.x / 1000 * -1,
                s: 2.0, r: 0.5
            },10000);
            auto_move.delay(2000);
            auto_move.onUpdate(function (object) {
              this.mesh.position.x = object.x1;
              this.mesh.position.y = object.y1;
              this.mesh.position.z = object.z1;
              this.mesh.rotation.x = object.x2;
              this.mesh.rotation.y = object.y2;
              this.bloomPass.strength = object.s;
              this.bloomPass.radius = object.r;
            }.bind(this));

            let auto_return = new TWEEN.Tween(params);
            auto_return.to({
                x1: this.mesh.position.x, y1: this.mesh.position.y, z1: this.mesh.position.z, 
                x2: this.mesh.rotation.x, y2: this.mesh.rotation.y,
                s: 0.5, r: 1.5
            },10000);
            auto_return.delay(2000);
            auto_return.onUpdate(function (object) {
              this.mesh.position.x = object.x1;
              this.mesh.position.y = object.y1;
              this.mesh.position.z = object.z1;
              this.mesh.rotation.x = object.x2;
              this.mesh.rotation.y = object.y2;
              this.bloomPass.strength = object.s;
              this.bloomPass.radius = object.r;
            }.bind(this));

            auto_move.chain(auto_return);

            // パーティクル拡散
            auto_diffusion.start();


            // スライドフラグ反転
            this.slide_flag = !this.slide_flag


            // オブジェクト移動（視点が極端に近づかないように制限）
            if (this.moving_flag & this.mesh.position.z + (2000 / (random_slide_time*500)) <= (this.camera.position.z * 0.3)) {
              auto_move.start();
              this.moving_flag = !this.moving_flag
              window.setTimeout(function(){this.moving_flag = !this.moving_flag}.bind(this), 12000*2)
            }
          }
        }
      }
    }

  }

  mouseInteraction() {
    // マウスドラッグアニメーション
    let target = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2000, 2000),
      new THREE.MeshBasicMaterial()
    );

    if (typeof window.ontouchstart === "undefined") {
  
      window.addEventListener('mousemove', (event) => {
        this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    
        this.raycaster.setFromCamera( this.mouse, this.camera );
    
        let intersects = this.raycaster.intersectObjects( [target] );
    
        this.point.x = intersects[0].point.x;
        this.point.y = intersects[0].point.y;

        // 半透明黒フィルター
        const dark_cover = document.getElementById('hidden_cover');
        
        if(dark_cover.style.opacity == 0) {
          gsap.to(this.material.uniforms.mousePressed, {
            duration: 0.3,
            value: 1,
            ease: "ease.out(1, 0.3)"
          });
        } else {
          gsap.to(this.material.uniforms.mousePressed, {
            duration: 0.3,
            value: 0,
            ease: "ease.out(1, 0.3)"
          });
        }

    
      }, false);
      
    } else {

      window.addEventListener('touchstart', (event) => {
  
        this.mouse.x = ( event.changedTouches[0].clientX / this.resized_width ) * 2 - 1;
        this.mouse.y = - ( event.changedTouches[0].clientY / this.resized_height ) * 2 + 1;
    
        this.raycaster.setFromCamera( this.mouse, this.camera );
    
        let intersects = this.raycaster.intersectObjects( [target] );
    
        this.point.x = intersects[0].point.x;
        this.point.y = intersects[0].point.y;

        if(dark_cover.style.opacity == 0) {
          gsap.to(this.material.uniforms.mousePressed, {
            duration: 0.3,
            value: 1,
            ease: "ease.out(1, 0.3)"
          });
        }
      });
  
      window.addEventListener('touchend', (e) => {
        gsap.to(this.material.uniforms.mousePressed, {
          duration: 0.3,
          value: 0,
          ease: "ease.out(1, 0.3)"
        });
      });
  
      window.addEventListener('touchmove', (event) => {
        this.mouse.x = ( event.changedTouches[0].clientX / this.resized_width ) * 2 - 1;
        this.mouse.y = - ( event.changedTouches[0].clientY / this.resized_height ) * 2 + 1;
    
        this.raycaster.setFromCamera( this.mouse, this.camera );
    
        let intersects = this.raycaster.intersectObjects( [target] );
    
        this.point.x = intersects[0].point.x;
        this.point.y = intersects[0].point.y;
    
      }, false);
    }
 
  }

  animate() {

    this.time++;
    this.composer.setSize( window.innerWidth, window.innerHeight );
    this.composer.render();

    this.getDeltaTime = this.clock.getDelta();

    // 画面の描画毎にanimate関数を呼び出す
    requestAnimationFrame( this.animate.bind(this) );
  
    // レンダラーにシーンとカメラを追加
    // this.renderer.render( this.scene, this.camera );
    
    // パーティクル移動速度
    window.setTimeout(() =>{
      this.mesh.material.uniforms.u_time.value += (2.0 * this.getDeltaTime);
      this.mesh.material.uniforms.mouse.value = this.point;
      this.mesh.material.uniforms.time.value = this.time;
      this.mesh.material.uniforms.move.value = this.move;
      if (typeof window.ontouchstart === "undefined") {
        this.mesh.material.uniforms.diffusionScale.value = 180.0;
        this.mesh.material.uniforms.circleScale.value = 50.0;
      } else {
        this.mesh.material.uniforms.diffusionScale.value = 80.0;
        this.mesh.material.uniforms.circleScale.value = 25.0;
      }
    }, this.fadein_times*this.interval_time)

    // Tween.jsアニメーションの実行
    TWEEN.update();
    
    // // 頂点の透明度の更新を許可
    this.mesh.geometry.attributes.alpha.needsUpdate = true;

    // // 頂点の座標の更新を許可
    this.mesh.geometry.attributes.position.needsUpdate = true;

    // // 頂点の色の更新を許可
    this.mesh.geometry.attributes.color.needsUpdate = true;

    // // 頂点の移動検知フラグの更新を許可
    this.mesh.geometry.attributes.flag.needsUpdate = true;


    // // 頂点の変色検知フラグの更新を許可
    // this.mesh.geometry.attributes.colorChangeFlag.needsUpdate = true;
  }

  showGuide() {
    this.nav_block = document.getElementById("nav_block");
    this.circle = document.getElementById("circle");
    this.animation_nav = gsap.timeline();

    this.animation_nav
    .to(this.circle, {
      duration: 0.5,
      opacity: .7,
      y: 5,
    })
    .to(this.circle, {
      duration: 0.5,
      x:  anime_nav.clientWidth*0.5,
    })
    .to(this.circle, {
      duration: 0.4,
      opacity: 0,
      x:  anime_nav.clientWidth*0.8,
      y: -5,
    });

    this.animation_nav.repeat(-1);

    window.setTimeout(() => {
      if (this.slide_flag === false) {
        this.nav_block.style.opacity = 1;
        this.nav_block.style.visibility = "visible";
      }
    }, this.fadein_times*this.interval_time+5000);
  }

  setSize() {

      // ウィンドウサイズを取得
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      // ヘッダーの高さ
      this.header_height = document.getElementById("header_nav").clientHeight;

      // トップページmainタグの高さを取得してfooterのmargin-topに設定
      this.main_height = document.getElementById("top_main").clientHeight;
      document.querySelector("footer").style.marginTop = this.main_height + "px";


      // ブレイクポイントの設定
      this.width_break_point = 700;
      this.height_break_point = 864;

      this.width_break_point_sp = 1440;


      // カメラのアスペクト比を正す
      this.camera.aspect = this.width / (this.height -  this.header_height);
      this.camera.updateProjectionMatrix();

      // デバイスがPCの場合
      if (typeof window.ontouchstart === "undefined") {
        if (this.width >= this.width_break_point) {
          this.camera.position.z = 400;
          if (this.height <= this.height_break_point) {
            this.mesh.material.uniforms.u_value.value = ((this.width + this.height) / 1000) - ((1200 + this.height) / this.width);
          } else {
            this.mesh.material.uniforms.u_value.value = ((this.width + this.height) / 600) - ((1200 + this.height) / this.width);
          }
        } else {
          this.camera.position.z = this.height / this.width * 400;
          this.mesh.material.uniforms.u_value.value = ((this.width + this.height) / 1800) - ((1200 + this.height) / this.width);
        }
        
        // デバイスがモバイルの場合
      } else {
        if (this.width >= this.width_break_point_sp) {
          if (this.width < this.height) {
            this.camera.position.z = this.height / this.width * 230;
            this.mesh.material.uniforms.u_value.value = ((this.width + this.height) / 180) - ((1200 + this.height) / this.width);
          } else {
            if  (this.this.camera.aspect > 1.85) {
              this.camera.position.z = this.width / this.height * 120;
              this.mesh.material.uniforms.u_value.value = ((this.width + this.height) / 200) - ((2800 + this.height) / this.width);
            } else {
              this.camera.position.z = this.width / this.height * 170;
              this.mesh.material.uniforms.u_value.value = ((this.width + this.height) / 180) - ((2800 + this.height) / this.width);
            }
          }
        } else {
          if (this.width < this.height) {
            this.camera.position.z = this.height / this.width * 200;
            this.mesh.material.uniforms.u_value.value = ((this.width + this.height) / 180) - ((1600 + this.height) / this.width);
            nav_block.style.bottom = this.height*0.15 + 'px';
          } else {
            if (this.camera.aspect > 1.8) {
              this.camera.position.z = this.width / this.height * 120;
              this.mesh.material.uniforms.u_value.value = ((this.width + this.height) / 200) - ((3400 + this.height) / this.width);
              nav_block.style.display = 'none'
            } else {
              this.camera.position.z = this.width / this.height * 170;
              this.mesh.material.uniforms.u_value.value = ((this.width + this.height) / 200) - ((2800 + this.height) / this.width);
              nav_block.style.bottom = this.height*0.15 + 'px';
            }
          }
        }
      }

      // レンダラーのサイズを調整する
      this.renderer.setSize(this.width, this.height -  this.header_height);

      // ウィンドウサイズ更新
      this.resized_width = window.innerWidth;
      this.resized_height = window.innerHeight;
  }

  resize() {
    this.currentWidth = window.innerWidth;
    this.currentHeight = window.innerHeight;
    
    window.addEventListener("resize", function() {
  
      if (this.currentWidth == window.innerWidth & typeof window.ontouchstart != "undefined") {
  
        // インタラクションガイドの位置を変更。
        if (this.currentHeight < window.innerHeight) {
          this.nav_block.style.bottom = (this.height*0.15 + 80) + 'px';
        } else {
          this.nav_block.style.bottom = this.height*0.15 + 'px';
        }
  
        // ウインドウ横幅が変わっていないためレンダラーのリサイズはなし。
        return;
      }
      
      // ウインドウ横幅が変わったのでリサイズと見なす。
      // 横幅を更新
      this.currentWidth = window.innerWidth;
      this.setSize();
    }.bind(this));
  }

  removeMesh() {
    links.forEach(link => {
      link.addEventListener('click', () => {
        if(this.mesh) {
          this.scene.remove( this.mesh );
          this.geometry.dispose();
          this.material.dispose();
        }
      });
    });
  }

  settings() {
    let that = this;
    this.settings = {
        bloomStrength: 0,
        bloomThreshold: 0,
        bloomRadius: 0,
    };
    this.gui = new dat.GUI();
    this.gui.add(this.settings, "bloomStrength", 0, 2, 0.01);
    this.gui.add(this.settings, "bloomThreshold", 0, 1, 0.01);
    this.gui.add(this.settings, "bloomRadius", 0, 1, 0.01);
  }
}

function randomNumbers(max, min) {
  // 整数の乱数を生成する
  return Math.floor( Math.random() * max + 1 - min ) + min;
}

function random(a, b) {
  return a + (b - a) * Math.random();
}

function plusMinus() {
  let plus_and_minus = [1, -1];
  return plus_and_minus[Math.floor(Math.random() * plus_and_minus.length)];
}
