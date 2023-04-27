import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import gsap from 'gsap';

initKeyVisual();

async function initKeyVisual() {
  let surround;
  let sketch;
  
  // // ローディング画面の表示
  const loading_background = document.getElementById("loading");
  
  class Surround {
    constructor() {
  
      setTimeout(() => {
        // canvasのmargin-topにheaderの高さを設定
        this.header_height = document.getElementById("header_nav").clientHeight;
      })
      // canvasのmargin-topにheaderの高さを設定
      this.canvas_element = document.getElementById('webgl');
  
      // 透過黒レイヤー（hidden_cover）の高さ調整
      if(document.getElementById("company_section")) {
        const company_section_height = document.getElementById("company_section").clientHeight;
        const hidden_cover = document.getElementById("hidden_cover");
        hidden_cover.style.height = (company_section_height + hidden_cover.clientHeight) + "px";
      }
  
    }
  
    callFunctions() {
      this.setMainHeight();
      this.blackOut();
      this.ResponseToEvent();
    }
  
    setMainHeight() {
      setTimeout(() => {
        // // canvasのmargin-topにheaderの高さを設定
        this.header_height = document.getElementById("header_nav").clientHeight;
    
        if (this.canvas_element) {
          this.canvas_element.style.marginTop = this.header_height + "px";
        }
      })
    }
  
    blackOut() {
  
      // コンテンツ位置までスクロールしたら暗くする
      const dark_cover = document.getElementById('hidden_cover');
      if (document.getElementById("key-visual")) {
        const key_visual = document.getElementById("key-visual");
        let key_visual_bottom = key_visual.getBoundingClientRect().bottom + window.pageYOffset;
        let target_top = key_visual_bottom - (window.innerHeight * 0.88);
        let target_bottom = document.getElementById("company_section").getBoundingClientRect().bottom + window.pageYOffset;
    
        if (window.scrollY < target_top) {
          dark_cover.style.opacity = 0;
          dark_cover.style.visibility = "invisible";
        } else if (window.scrollY <= target_bottom && window.scrollY > target_top) {
          dark_cover.style.opacity = .5;
          dark_cover.style.visibility = "visible";
        } else {
          dark_cover.style.opacity = 1;
          dark_cover.style.visibility = "visible";
        }
      }
    }
  
    ResponseToEvent() {
  
      window.addEventListener('load', this.blackOut.bind(this));
      window.addEventListener('scroll', this.blackOut.bind(this));
      
      // リサイズ時の処理（3D表示以外の調整）
      window.addEventListener('resize', () => {
        this.setMainHeight();
        this.blackOut();
      });
    }
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
  
      // アニメーション速度の調整用
      this.clock = new THREE.Clock();
  
  
      // フェードインを何段階で実行するか
      this.fadein_times = 4;
      // フェードインの速度（フェードイン完了まで fadein_times × interval_time）
      this.interval_time = 500;
      // ガイドを表示するまでの時間
      this.show_guide_time = this.fadein_times*this.interval_time+3500
  
  
      // オブジェクト移動許可フラグ
      this.moving_flag = false;
  
      // raycaster検知フラグ
      this.detection = false;

      // アニメーションフラグ
      this.shouldAnimate = true;
  
      // パーティクルの頂点座標
      this.particle_pos = new THREE.Vector2();
  
  
      this.time = 0;
      this.move = 0;
      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2(-1000, -1000);
      this.point = new THREE.Vector2();
      
      this.isMobile = (typeof window.ontouchstart !== "undefined");

      this.worker = new Worker("../worker.js");
      this.worker.addEventListener('message', (event) => this.handleWorkerMessage(event));
    }
  
    callFunctions() {
      // this.setImaxge();
    }
  
    setImage() {
      // 画像要素を生成
      this.img = new Image();
  
      // 表示させる画像のパスを指定
      if (this.isMobile) {
        // スマホの処理
        this.img.src = "../img/logo_color_small.png";
      } else {
        // PCの処理
        this.img.src = "../img/logo_color.png";
      }
      this.img.crossOrigin = "anonymous";
  
      // console.log('setImage')
      this.img.addEventListener('load', () => {
        const canvas = document.createElement('canvas');
        canvas.width = this.img.width;
        canvas.height = this.img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this.img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
        this.worker.postMessage({
          type: 'initImageData',
          imageData: imageData,
          width: this.img.width,
          height: this.img.height,
          ratio: 2.0
        });
      });
    }

    // Workerからのメッセージを処理する関数
    handleWorkerMessage(event) {

      const { type, imageData } = event.data;
  
      switch (type) {
        case 'imageData':
          // 画像データの変換が完了したら、処理を続行
          this.pixcel_img = imageData;
  
          // init() 関数を呼び出す
          this.init();
          this.animate();
          this.setSize();
          break;
  
        default:
          console.error('Unknown message type:', type);
      }
    }
  
    init() {
  
      this.setRendere();
  
      // オブジェクトをシーンに追加
      this.addObjects();
  
    }
  
    setRendere() {
      // レンダラーの作成
      this.renderer = new THREE.WebGLRenderer();
  
      // レンダラーの高さ
      this.renderer.setSize( this.width, this.height -  this.header_height);
      this.renderer.physicallyCorrectLights = true;
      this.renderer.setClearColor();
  
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
    }
  
    addObjects() {
      // ジオメトリーの作成
      this.geometry = new THREE.BufferGeometry();
      
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
      // オブジェクト移動許可フラグの生成
      const flag = [];

      this.vertces = this.pixcel_img.position.length / 3;  // 頂点の数

      for (let i = 0; i < this.vertces; i++) {
        rand.push((Math.random() - 1.0) * 2.0, (Math.random() - 1.0) * 2.0);
        flag.push(1);
      }
      const rands = new THREE.BufferAttribute(new Float32Array(rand), 2);
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
          pointTexture: { value: new THREE.TextureLoader().load( '../img/triangle.png' ) },
          mouse: { type: "v2", value: new THREE.Vector2(0., 0.) },
          move: {type: "f", value: 0},
          time: {type: "f", value: 0},
          cameraZ: {type: "f", value: 0},
        },
        transparent: true,
        depthTest: false
      });
  
      // オブジェクトの作成
      this.mesh = new THREE.Points(this.geometry, this.material);

      // カリングを無効化する（フラスタムカリングを無効にする）
      this.mesh.frustumCulled = false;

      // ジオメトリの頂点座標の配列
      this.attribute = this.mesh.geometry.attributes.position;
      // パーティクルの座標配列
      this.particlePositions = this.attribute.array;
      // パーティクルの透明度の配列
      this.particleAlpha = this.mesh.geometry.attributes.alpha.array;
      // パーティクルの移動許可フラグの配列
      this.particleFlag = this.mesh.geometry.attributes.flag.array;
  
      this.scene.add( this.mesh );
      // console.log(this.scene)
    }
  
  
    animate() {
  
      if (!this.shouldAnimate) {
        return;
      }
      this.time++;
      this.composer.setSize( window.innerWidth, window.innerHeight );
      this.composer.render();
  
      this.getDeltaTime = this.clock.getDelta();
  
      if (document.querySelector('#webgl')) {
        // 画面の描画毎にanimate関数を呼び出す
        requestAnimationFrame( this.animate.bind(this) );
      }
      
      // パーティクル移動速度
      window.setTimeout(() =>{
        this.mesh.material.uniforms.u_time.value += (2.0 * this.getDeltaTime);
        this.mesh.material.uniforms.time.value = this.time;
        this.mesh.material.uniforms.move.value = this.move;
      }, this.fadein_times*this.interval_time)
      
      // // 頂点の透明度の更新を許可
      this.mesh.geometry.attributes.alpha.needsUpdate = true;
  
      // // 頂点の座標の更新を許可
      this.mesh.geometry.attributes.position.needsUpdate = true;
  
  
      // // 頂点の移動検知フラグの更新を許可
      this.mesh.geometry.attributes.flag.needsUpdate = true;
    }

  
    setSize() {
  
        // ウィンドウサイズを取得
        this.width = window.innerWidth;
        this.height = window.innerHeight;
  
        // ヘッダーの高さ
        this.header_height = document.getElementById("header_nav").clientHeight;
  
        // カメラのアスペクト比を正す
        this.camera.aspect = this.width / (this.height -  this.header_height);
        this.camera.updateProjectionMatrix();
  
        // カメラ位置とパーティクルサイズをレスポンシブに調整
        this.mesh.material.uniforms.u_value.value = (this.width + this.height) / 1000 - ((1200 + this.height) / this.width);
        this.camera.position.z = this.mesh.material.uniforms.cameraZ.value = 400;
  
        // レンダラーのサイズを調整する
        this.renderer.setSize(this.width, this.height -  this.header_height);
  
        // ウィンドウサイズ更新
        this.resized_width = window.innerWidth;
        this.resized_height = window.innerHeight;
    }

  
  }

  await activate();
  
  function activate() {
    document.addEventListener('DOMContentLoaded', (event) => {
      if (document.querySelector('#webgl')) {

          surround = new Surround();
          sketch = new Sketch();
    
          sketch.setImage();
      
          loading_background.style.opacity = 0;
    
          surround.callFunctions();
          sketch.callFunctions();
        }
    })
  }

}


