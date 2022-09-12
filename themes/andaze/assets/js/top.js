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

}