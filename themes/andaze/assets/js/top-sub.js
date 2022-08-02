import gsap from 'gsap';
import * as kvMain from './top.js';


export function kv_sub() {

  // ---------------------------------------------------------------------------------------------
  // キービジュアル周りのレイアウト調整
  // ---------------------------------------------------------------------------------------------

  // トップページmainタグの高さを取得してfooterのmargin-topに設定
  var main_height = document.getElementById("top_main").clientHeight;
  document.querySelector("footer").style.marginTop = main_height + "px";

  // リサイズ時に再調整
  window.addEventListener('resize', () => {
    main_height = document.getElementById("top_main").clientHeight;
    document.querySelector("footer").style.marginTop = main_height + "px";
  });

  // canvasのmargin-topにheaderの高さを設定
  const canvas = document.getElementById('webgl');
  if (canvas) {
    canvas.style.marginTop = kvMain.header_height + "px";
  }

  // 透過黒レイヤー（hidden_cover）の高さ調整
  var company_section_height = document.getElementById("company_section").clientHeight;
  var hidden_cover = document.getElementById("hidden_cover");
  hidden_cover.style.height = (company_section_height + hidden_cover.clientHeight) + "px";


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

}
