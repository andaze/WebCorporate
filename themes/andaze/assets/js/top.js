import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import gsap from 'gsap';


// ====================================================================
// キービジュアル周辺レイアウトのセットアップ
// ====================================================================

// 初回訪問判定フラグ
export let first_visit = true;

// 下層ページ判定フラグ
let is_bottom = false;

if (!((location.pathname == '/WebCorporate/ja/') | (location.pathname == '/WebCorporate/en/'))) {
    is_bottom = !is_bottom
}

// ローディング画面の表示
const loading_icon = document.getElementById("loading_icon");
export const loading_background = document.getElementById("loading");

if(!is_bottom) {
  loading_background.style.opacity = 1;
  loading_icon.style.visibility = "visible";
}

// canvasのmargin-topにheaderの高さを設定
const header_height = document.getElementById("header_nav").clientHeight;

export const canvas_elment = document.getElementById('webgl');
if (canvas_elment) {
  canvas_elment.style.marginTop = header_height + "px";
}


// 透過黒レイヤー（hidden_cover）の高さ調整
const company_section_height = document.getElementById("company_section").clientHeight;
const hidden_cover = document.getElementById("hidden_cover");
hidden_cover.style.height = (company_section_height + hidden_cover.clientHeight) + "px";

// コンテンツ位置までスクロールしたら暗くする
const dark_cover = document.getElementById('hidden_cover')
const key_visual = document.getElementById("key-visual");
let key_visual_bottom = key_visual.getBoundingClientRect().bottom + window.pageYOffset;
let target_static = key_visual_bottom - (window.innerHeight * 0.88);

window.addEventListener('load', blackOut);
window.addEventListener('scroll', blackOut);


// リサイズ時の処理（3D表示以外の調整）
window.addEventListener('resize', () => {
  resizeWindow();
  blackOut();
});


function randomNumbers(max, min) {
  // 整数の乱数を生成する
  return Math.floor( Math.random() * max + 1 - min ) + min;
}

function plusMinus() {
  let plus_and_minus = [1, -1];
  return plus_and_minus[Math.floor(Math.random() * plus_and_minus.length)];
}

function resizeWindow() {
  // canvasのmargin-topにheaderの高さを設定
  canvas_elment.style.marginTop = header_height + "px";

  // canvasのmargin-topにheaderの高さを設定
  if (canvas_elment) {
    canvas_elment.style.marginTop = header_height + "px";
  }
}

function blackOut() {
  if (window.scrollY >= target_static) {
    dark_cover.style.opacity = .5;
    dark_cover.style.visibility = "visible";
  } else if (window.scrollY < target_static) {
    dark_cover.style.opacity = 0;
    dark_cover.style.visibility = "invisible";
  }
}



// ====================================================================
// キービジュアルロゴのセットアップ
// ====================================================================

// 画像要素を生成
const img = new Image();

// 表示させる画像のパスを指定
if (typeof window.ontouchstart === "undefined") {
  // PCの処理
  img.src = "../img/logo.png";
} else {
  // スマホの処理
  img.src = "../img/logo_small.png";
}
img.crossOrigin = "anonymous";


export function kv_main() {
  img.addEventListener('load', () => {
    new Sketch();
  });
}

class Sketch {
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


    this.init();
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

    }, this.fadein_times*this.interval_time+5000 + (randomNumbers(5, 1)*1000));
  }

  addObjects() {
    // ジオメトリーの作成
    this.geometry = new THREE.BufferGeometry();

    // 画像の変換（ImagePixel関数）
    this.pixcel_img = this.ImagePixel(img, img.width, img.height, 2.0);

    
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
    
    // 各パラメータをジオメトリーに登録
    this.geometry.setAttribute("position", position);
    this.geometry.setAttribute("color", color);
    this.geometry.setAttribute("alpha", alpha);
    this.geometry.setAttribute("rand", rands);
    this.geometry.setAttribute("flag", flags);


    // マテリアルの作成
    this.material = new THREE.RawShaderMaterial({

      // シェーダーの設定
      vertexShader: document.querySelector("#js-vertex-shader").textContent,
      fragmentShader: document.querySelector("#js-fragment-shader").textContent,
      uniforms: {
        u_ratio: { type: "f", value: 0.0 },
        u_time: { type: "f", value: 0.0 },
        u_value: { type: "f", value: 0.0 },
        pointTexture: { value: new THREE.TextureLoader().load( '../img/triangle.png' ) }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
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

        // カラージェネレーターで選定した色を出現させる（出現し得る色は5種類 rgb値で指定）
        this.rgb_vals = [
          [(88/255).toFixed(2), (0/255).toFixed(2), (219/255).toFixed(2)],
          [(219/255).toFixed(2), (47/255).toFixed(2), (7/255).toFixed(2)],
          [(0/255).toFixed(2), (102/255).toFixed(2), (219/255).toFixed(2)],
          [(219/255).toFixed(2), (212/255).toFixed(2), (0/255).toFixed(2)],
          [(0/255).toFixed(2), (219/255).toFixed(2), (144/255).toFixed(2)]
        ];

        this.rgb_val = this.rgb_vals[Math.floor(Math.random() * this.rgb_vals.length)]

        this.r = this.rgb_val[0];
        this.g = this.rgb_val[1];
        this.b = this.rgb_val[2];


        // webglでは透明度を0~1の範囲で表現するので、255で割って数値を0~1の範囲に変換
        this.a = this.data[this.index + 3] / 255;
        
        // 座標、色、透明度の値を配列に追加
        if (this.a > 0) {
          this.position.push(this.pX, this.pY, this.pZ), this.color.push(this.r, this.g, this.b), this.alpha.push(this.a);
        }
      }
    }

    return { position: this.position, color: this.color, alpha: this.alpha };

  }

  removeLoadingEnd() {
      // 初回訪問時
      if (first_visit) {
        
        if (is_bottom) {

          // ロード画面を表示
          loading_background.style.opacity = 1;
      
        } 

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
    // オブジェクト座標
    const mesh_position = {
      x1: this.mesh.position.x, y1: this.mesh.position.y, z1: this.mesh.position.z,
      x2: this.mesh.rotation.x, y2: this.mesh.rotation.y, z2: this.mesh.rotation.z
    };

    
    if (this.stopDiffusion) {
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
              // console.log(this.mesh.geometry.attributes.flag.array)
              particlePositions[3*i] = object.x;
              particlePositions[3*i+1] = object.y;
              particleFlag[i] = object.z;
            });
            auto_diffusion.repeat(1);
            auto_diffusion.yoyo(true);
            

            // オブジェクト移動のTweenアニメーション
            var auto_move = new TWEEN.Tween(mesh_position);
            auto_move.to({
                x1: destination.x / (random_slide_time*1000), y1: destination.y*(-1) / (random_slide_time*1000), z1: this.mesh.position.z + (2000 / (random_slide_time*500)), 
                x2: destination.y / 1000 * (-1), y2: destination.x / 1000 * -1,
            },10000);
            auto_move.delay(2000);
            auto_move.onUpdate(function (object) {
              this.mesh.position.x = object.x1;
              this.mesh.position.y = object.y1;
              this.mesh.position.z = object.z1;
              this.mesh.rotation.x = object.x2;
              this.mesh.rotation.y = object.y2;
            }.bind(this));

            let auto_return = new TWEEN.Tween(mesh_position);
            auto_return.to({
                x1: this.mesh.position.x, y1: this.mesh.position.y, z1: this.mesh.position.z, 
                x2: this.mesh.rotation.x, y2: this.mesh.rotation.y,
            },10000);
            auto_return.delay(2000);
            auto_return.onUpdate(function (object) {
              this.mesh.position.x = object.x1;
              this.mesh.position.y = object.y1;
              this.mesh.position.z = object.z1;
              this.mesh.rotation.x = object.x2;
              this.mesh.rotation.y = object.y2;
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
  }
}