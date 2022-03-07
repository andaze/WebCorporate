// ---------------------------------------------------------------------------------------------
// 画像をwebglでデータを扱いやすいように変換
// ---------------------------------------------------------------------------------------------

function ImagePixel(path, w, h, ratio) {

  // canvasの設定
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = w;
  const height = h;
  canvas.width = width;
  canvas.height = height;

  // 画像データの描画
  ctx.drawImage(path, 0, 0);
  const data = ctx.getImageData(0, 0, width, height).data;

  // 座標情報
  const position = [];
  // 色情報
  const color = [];
  // 透明度
  const alpha = [];

  for (let y = 0; y < height; y += ratio) {
    for (let x = 0; x < width; x += ratio) {

      // 配列内の任意の[x、y]ピクセルの位置を取得
      const index = (y * width + x) * 4;

      // webglでは色を0~1の範囲で表現するので、255で割って数値を0~1の範囲に変換
      const r = data[index] / 255;
      const g = data[index + 1] / 255;
      const b = data[index + 2] / 255;
      const a = data[index + 3] / 255;

      // webglは原点が中心となり、xは右がプラス左がマイナス。yは上がプラス下がマイナス。
      const pX = x - width / 2;
      const pY = -(y - height / 2);
      const pZ = 0;

      position.push(pX, pY, pZ), color.push(r, g, b), alpha.push(a);
    }
  }

  return { position, color, alpha };
}


// ---------------------------------------------------------------------------------------------
// Three.jsでの表示処理
// ---------------------------------------------------------------------------------------------

// 画像要素を生成
const img = new Image();

// 表示させる画像のパスを指定
img.src = "img/yoko_c_min.png";
img.crossOrigin = "anonymous";

// 画像が読み込まれた後に処理を実行
img.addEventListener("load", () => {
  
  // シーンの作成
  var scene = new THREE.Scene();


  // カメラの作成
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


  // カメラ位置設定
  camera.position.z = 500;
  camera.position.x = 0;
  camera.position.y = 0;

  const windowWidth = document.body.clientWidth;
  const windowHeight = window.innerHeight;
  camera.aspect = windowWidth / windowHeight;


  // レンダラーの作成
  var renderer = new THREE.WebGLRenderer();


  // レンダラーが描画するキャンバスサイズの設定
  renderer.setSize( window.innerWidth, window.innerHeight );


  // キャンバスをDOMツリーに追加
  const wrapper = document.querySelector("#webgl");
  wrapper.appendChild(renderer.domElement);



  // OrbitControlsインスタンス作成
  var controls = new THREE.OrbitControls( camera, renderer.domElement );

  // ズーム設定解除
  controls.enableZoom = false;


  // ジオメトリーの作成
  const geometry = new THREE.BufferGeometry();

  // 画像の変換（ImagePixel関数）
  var pixcel_img = ImagePixel(img, img.width, img.height, 2.0);

  // 変換後の画像の頂点座標情報抽出
  const position = new THREE.BufferAttribute(
    new Float32Array(pixcel_img.position),
    3
  );
  // 変換後の画像の色情報抽出
  const color = new THREE.BufferAttribute(
    new Float32Array(pixcel_img.color),
    3
  );
  // 変換後の画像の透明度情報抽出
  const alpha = new THREE.BufferAttribute(
    new Float32Array(pixcel_img.alpha),
    1
  );

  // ランダム値の生成
  const rand = [];
  const vertces = pixcel_img.position.length / 3;  // 頂点の数
  for (let i = 0; i < vertces; i++) {
    rand.push((Math.random() - 1.0) * 2.0, (Math.random() - 1.0) * 2.0);
  }
  const rands = new THREE.BufferAttribute(new Float32Array(rand), 2);

  // 各パラメータをジオメトリーに登録
  geometry.setAttribute("position", position);
  geometry.setAttribute("color", color);
  geometry.setAttribute("alpha", alpha);
  geometry.setAttribute("rand", rands);
  

  // マテリアルの作成
  const material = new THREE.RawShaderMaterial({

    // シェーダーの設定
    // top.htmlからvertexShaderとfragmentShaderを取得
    vertexShader: document.querySelector("#js-vertex-shader").textContent,
    fragmentShader: document.querySelector("#js-fragment-shader").textContent,
    uniforms: {
      u_ratio: { type: "f", value: 0.0 },
      u_time: { type: "f", value: 0.0 },
    },
    // 画像背景を透過
    transparent: true
  });

  
  // オブジェクトの作成
  var mesh = new THREE.Points(geometry, material);
  

  // オブジェクトをシーンに追加
  scene.add( mesh );


  // gsapによるアニメーションの設定
  gsap.from(mesh.material.uniforms.u_ratio, {
    value: 1000.0,
    duration: 3,
    ease: "power4.out",
  });


  // ---------------------------------------------------------------------------------------------
  //アニメーションの設定
  // ---------------------------------------------------------------------------------------------

  function animate() {
    // 画面の描画毎にanimate関数を呼び出す
    requestAnimationFrame( animate );
  
    // レンダラーにシーンとカメラを追加
    renderer.render( scene, camera );
  }
  

  // アニメーションの実行
  animate();
});
