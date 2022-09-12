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

}

