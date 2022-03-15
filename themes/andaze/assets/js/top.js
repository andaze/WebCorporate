// シーンの作成
var scene = new THREE.Scene();

// カメラの作成
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// カメラ位置設定
camera.position.z = 350;
camera.position.x = 0;
camera.position.y = 10;


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


// 画像要素を生成
const img = new Image();

// 表示させる画像のパスを指定
img.src = "img/yoko_2k_min.png";
img.crossOrigin = "anonymous";

// 画像が読み込まれた後に処理を実行
img.addEventListener("load", () => {
  
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
    vertexShader: document.querySelector("#js-vertex-shader").textContent,
    fragmentShader: document.querySelector("#js-fragment-shader").textContent,
    uniforms: {
      u_ratio: { type: "f", value: 0.0 },
      u_time: { type: "f", value: 0.0 },
      move_param: { type: "i", value: 0 }
    },
    transparent: true,
  });

  
  // オブジェクトの作成
  var mesh = new THREE.Points(geometry, material);
  
  
  // オブジェクトの位置調整
  mesh.position.x = 0.0;
  
  
  // オブジェクトをシーンに追加
  scene.add( mesh );
  
  
  // 画像の透明度配列
  const particleAlpha =mesh.geometry.attributes.alpha.array;

  // フェードイン実行（FadeIn関数）
  // FadeIn(3);


  // ジオメトリの頂点座標の配列
  var attribute = mesh.geometry.attributes.position;

  // マウスの定義
  var mouse = new THREE.Vector2();

  // クリックフラグ
  var click_frag = false;

  window.setTimeout(reverse_flag, 500);

  renderer.domElement.addEventListener('mousedown', vibration);


  function vibration(event) {
    event.preventDefault();
    
    const particlePositions = mesh.geometry.attributes.position.array;

    if (click_frag==true) {
      for (let i = 0; i < vertces; i++) {
        
        mouse.x = event.clientX - (window.innerWidth / 2);
        mouse.y = - (event.clientY - (window.innerHeight / 2));
        x = attribute.getX(i)*(500/360);
        y = attribute.getY(i)*(500/360);
        
        var random = Math.floor( Math.random() * 10 ) + 10;

        var distance = Math.sqrt( Math.pow( x - mouse.x, 2 ) + Math.pow( y - mouse.y, 2 ) ) ;

        var vertex_position = {x: attribute.getX(i), y: attribute.getY(i)};
        
        
        if (distance < 10) {
          pos_x = particlePositions[3*i]+10;
          pos_y = particlePositions[3*i+1]+random*5

          var tw1 = new TWEEN.Tween(vertex_position);
          tw1.to({x:pos_x, y: pos_y}, 5000);
          tw1.easing( TWEEN.Easing.Quadratic.Out );
          tw1.onUpdate(function (object) {
            particlePositions[3*i] = object.x;
            particlePositions[3*i+1] = object.y;
          });

          var tw2 = new TWEEN.Tween(vertex_position);
          tw2.to({x: pos_x + random*5, y: pos_y+random*5}, 5000);
          tw2.easing( TWEEN.Easing.Quadratic.Out );
          tw2.onUpdate(function (object) {
            particlePositions[3*i] = object.x;
            particlePositions[3*i+1] = object.y;
          });

          var tw3 = new TWEEN.Tween(vertex_position);
          tw3.to({x: particlePositions[3*i], y: particlePositions[3*i+1]}, 5000);
          tw3.onUpdate(function (object) {
            particlePositions[3*i] = object.x;
            particlePositions[3*i+1] = object.y;
          });

          tw2.chain(tw3);
          tw1.chain(tw2);

          tw1.start();
        }
      }
      window.setTimeout(reverse_flag, 500);
    }
    click_frag = false;
  }
 
  function reverse_flag() {
      if (click_frag == false) {
        click_frag = true;
      } else {
        click_frag = false;
      }
    }



  // アニメーションの実行（animate関数）
  animate();



  // ---------------------------------------------------------------------------------------------
  // 関数定義1 webglでがデータを扱いやすいように画像データを変換
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

        // webglは原点が中心となり、xは右がプラス左がマイナス。yは上がプラス下がマイナス。
        const pX = x - width / 2;
        const pY = -(y - height / 2);
        const pZ = 0;

        // 画像のrgb値を「0 or 255」となるようにランダムに変換（出現し得る色は8種類）
        var rgb_val = [0, 255]
        const r = rgb_val[Math.floor(Math.random() * rgb_val.length)];
        const g = rgb_val[Math.floor(Math.random() * rgb_val.length)];
        const b = rgb_val[Math.floor(Math.random() * rgb_val.length)];

        // webglでは透明度を0~1の範囲で表現するので、255で割って数値を0~1の範囲に変換
        const a = data[index + 3] / 255;
        
        // 座標、色、透明度の値を配列に追加
        position.push(pX, pY, pZ), color.push(r, g, b), alpha.push(a);
      }
    }

    return { position, color, alpha };
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義2 透明度前処理（異なる透明度の値を割り振ってパーティクルをグループ化）
  // ---------------------------------------------------------------------------------------------

  function PreProcessing(sampling_times) {

    // 透明ではないパーティクルの透明度を下げて見えなくする
    for (var i=0; i < vertces; i++) {
      if(particleAlpha[i] > 0) {
        particleAlpha[i] = 0.5 ** 6;
      }
    }

    // 透過させたパーティクルをランダムに複数回サンプリングして透明度を下げていく
    for (var i=0; i < sampling_times; i++) {
      for (var j=0; j < vertces; j++) {
        random = (j + Math.floor(Math.random() * 2) + 1);
        if(particleAlpha[random] > 0) {
          particleAlpha[random] = 0.5 ** (i + 7);
        }
      }
    }
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義3 フェードインアニメーション設定
  // ---------------------------------------------------------------------------------------------

  function PostProcessing(sampling_times) {

    // パーティクルの全頂点をTween.jsによりアニメーションさせる
    for (let i = 0; i < vertces; i++) {
      var vertex_alpha = {x: particleAlpha[i]};
      var tween = new TWEEN.Tween(vertex_alpha);
      tween.to({x: 1}, 3000);

      // 透明度の低いパーティクルから順番に出現させる
      for (j = 0; j < sampling_times; j++) {
        if (particleAlpha[i] === 0.5 **  (j + 6)) {
          tween.delay(j * 2000);
          tween.start();
        }
      }

      tween.onUpdate(function(object) {
          particleAlpha[i] = object.x;
      })
    }
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義4 フェードインアニメーション実行
  // ---------------------------------------------------------------------------------------------

  function FadeIn(sampling_time) {
    PreProcessing(sampling_time);
    PostProcessing(sampling_time + 1);
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義5 Three.jsのアニメーション関数
  // ---------------------------------------------------------------------------------------------

  function animate() {
    // 画面の描画毎にanimate関数を呼び出す
    requestAnimationFrame( animate );
  
    // レンダラーにシーンとカメラを追加
    renderer.render( scene, camera );
    
    // パーティクル移動速度
    mesh.material.uniforms.u_time.value += 0.1;

    // Tween.jsアニメーションの実行
    TWEEN.update();
    
    // 透明度の更新を許可
    mesh.geometry.attributes.alpha.needsUpdate = true;

    mesh.geometry.attributes.position.needsUpdate = true;
  }

});
