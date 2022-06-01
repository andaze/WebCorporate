import * as THREE from 'three';
import gsap from 'gsap';
import * as kvMain from './top.js';


// 初回訪問判定フラグ
var first_visit = true;


export function kv_sub() {
  
// ロゴ以外の処理についてこのファイルで記述します
// 混ぜるとわかりにくいと思ったため

// ---------------------------------------------------------------------------------------------
// キービジュアル周りのレイアウト調整
// ---------------------------------------------------------------------------------------------

// canvasのmargin-topにheaderの高さを設定
const canvas = document.getElementById('webgl');
if (canvas) {
  canvas.style.marginTop = kvMain.header_height + "px";
}

// トップページmainタグの高さを取得してfooterのmargin-topに設定
var main_height = document.getElementById("top_main").clientHeight;
document.querySelector("footer").style.marginTop = main_height + "px";

// リサイズ時に再調整
window.addEventListener('resize', () => {
  main_height = document.getElementById("top_main").clientHeight;
  document.querySelector("footer").style.marginTop = main_height + "px";
});


// ---------------------------------------------------------------------------------------------
// ローディング画面の表示
// ---------------------------------------------------------------------------------------------

  window.loading_icon = document.getElementById("loading_icon");
  window.loading_background = document.getElementById('loading');

  // 初回訪問時のみローディング画面を表示する
  if (first_visit) {
    
    window.setTimeout(() => {
      loading_icon.style.visibility = "visible";
    }, 0.1)
  
    window.addEventListener('load', () => {
  
      window.setTimeout(() => {
  
          // ロード画面を非表示
          loading_background.style.opacity = 0;
          loading_background.style.visibility = "hidden";
  
      }, 500);
  
    })

    first_visit = !first_visit

  } else {

    window.setTimeout(() => {
  
      // ロード画面を非表示
      loading_icon.style.opacity = 0;
      loading_icon.style.visibility = "hidden";

    }, 500);

  }



// ---------------------------------------------------------------------------------------------
// キービジュアルブラックアウト
// ---------------------------------------------------------------------------------------------

// コンテンツ位置までスクロールしたら暗くする
const dark_cover = document.getElementById('hidden_cover')
const key_visual = document.getElementById("key-visual");
const key_visual_bottom = key_visual.getBoundingClientRect().bottom + window.pageYOffset;
const target_static = key_visual_bottom - (kvMain.height * 0.88)

window.addEventListener('scroll', () => {
  blackOut()
});

window.addEventListener("resize", blackOut);

window.addEventListener('load', blackOut);

function blackOut() {
    if (window.scrollY >= target_static) {
        dark_cover.style.opacity = .5;
        dark_cover.style.visibility = "visible";
    } else if (window.scrollY < target_static) {
        dark_cover.style.opacity = 0;
        dark_cover.style.visibility = "hidden";
    }
}


// ---------------------------------------------------------------------------------------------
// インタラクションガイド
// ---------------------------------------------------------------------------------------------

const nav_block = document.getElementById("nav_block");
const circle = document.getElementById("circle");
const animation_nav = gsap.timeline();

animation_nav
.to(circle, {
  duration: 0.5,
  opacity: .7,
  y: 5,
})
.to(circle, {
  duration: 0.5,
  x:  anime_nav.clientWidth*0.5,
})
.to(circle, {
  duration: 0.4,
  opacity: 0,
  x:  anime_nav.clientWidth*0.8,
  y: -5,
});

animation_nav.repeat(-1);

window.setTimeout(() => {
  if (slide_flag === false) {
    nav_block.style.opacity = 1;
    nav_block.style.visibility = "visible";
  }
}, fadein_times*interval_time+5000);

}
