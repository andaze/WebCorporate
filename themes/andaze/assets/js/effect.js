// ---------------------------------------------------------------------------------------------
// キービジュアル周りのレイアウト調整
// ---------------------------------------------------------------------------------------------

// トップページmainタグの高さを取得してfooterのmargin-topに設定
const main_height = document.getElementById("top_main").clientHeight;
document.querySelector("footer").style.marginTop = main_height + "px";

// canvasのmargin-topにheaderの高さを設定
const canvas = document.getElementById('webgl');
canvas.style.marginTop = header_height + "px";

// ---------------------------------------------------------------------------------------------
// ローディング画面の表示
// ---------------------------------------------------------------------------------------------

const loading_icon = document.getElementById("loading_icon");
window.setTimeout(() => {
  loading_icon.style.visibility = "visible";
}, 1)

// 画面が読み込まれた後にフェードイン開始
window.setTimeout(() => {

    // ロード画面を非表示
    const spinner = document.getElementById('loading');
    spinner.style.opacity = 0;
    spinner.style.visibility = "hidden";

}, 500);