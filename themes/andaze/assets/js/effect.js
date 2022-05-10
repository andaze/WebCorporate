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