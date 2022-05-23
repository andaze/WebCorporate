// ---------------------------------------------------------------------------------------------
//　3D空間のセットアップ・オブジェクトの生成
// ---------------------------------------------------------------------------------------------

// シーンの作成
var scene = new THREE.Scene();


// ウィンドウサイズを取得
const width = window.innerWidth;
const height = window.innerHeight;


// カメラの作成
var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1500 );


// カメラ位置設定
camera.position.x = 0;
camera.position.y = 30;


// レンダラーの作成
var renderer = new THREE.WebGLRenderer();

// ヘッダーの高さ
const header_height = document.getElementById("header_nav").clientHeight;
renderer.setSize( width, height -  header_height);


// キャンバスをDOMツリーに追加
const wrapper = document.querySelector("#webgl");
wrapper.appendChild(renderer.domElement);


// ジオメトリーの作成
const geometry = new THREE.BufferGeometry();

// 画像要素を生成
const img = new Image();


// 表示させる画像のパスを指定
img.src = "../img/logo.png";
img.crossOrigin = "anonymous";

// グローバル変数として定義
window.slide_flag = false;
window.fadein_times = 4;
window.interval_time = 500;

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

  // オブジェクト移動許可フラグの生成
  const flag = [];
  for (let i = 0; i < vertces; i++) {
    flag.push(1);
  }
  const flags = new THREE.BufferAttribute(new Float32Array(flag), 1);

  // 変色検知フラグの生成
  const colorChangeFlag = [];
  for (let i = 0; i < vertces; i++) {
    colorChangeFlag.push(0);
  }
  const colorChangeFlags = new THREE.BufferAttribute(new Float32Array(colorChangeFlag), 1);

  
  // 各パラメータをジオメトリーに登録
  geometry.setAttribute("position", position);
  geometry.setAttribute("color", color);
  geometry.setAttribute("alpha", alpha);
  geometry.setAttribute("rand", rands);
  geometry.setAttribute("flag", flags);
  geometry.setAttribute("colorChangeFlag", colorChangeFlags);
  
  
  // マテリアルの作成
  const material = new THREE.RawShaderMaterial({

    // シェーダーの設定
    vertexShader: document.querySelector("#js-vertex-shader").textContent,
    fragmentShader: document.querySelector("#js-fragment-shader").textContent,
    uniforms: {
      u_ratio: { type: "f", value: 0.0 },
      u_time: { type: "f", value: 0.0 },
      u_value: { type: "f", value: 0.0 },
      // pointTexture: { value: new THREE.TextureLoader().load( '../img/spark.png' ) }
      pointTexture: { value: new THREE.TextureLoader().load( '../img/triangle.png' ) }
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthTest: false
  });
  

  
  // オブジェクトの作成
  var mesh = new THREE.Points(geometry, material);
  
  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　変数定義 start
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  

  // ---------------------------------------------------------------------------------------------
  //  ウィンドウサイズ定義
  // ---------------------------------------------------------------------------------------------

  var resized_width = window.innerWidth;
  var resized_height = window.innerHeight;


  // ---------------------------------------------------------------------------------------------
  //　ジオメトリ関係変数定義
  // ---------------------------------------------------------------------------------------------
  
  // ジオメトリの頂点座標の配列
  var attribute = mesh.geometry.attributes.position;
  
  // パーティクルの透明度の配列
  const particleAlpha =mesh.geometry.attributes.alpha.array;

  // パーティクルの色配列
  const particleColor =mesh.geometry.attributes.color.array;

  // パーティクルの座標配列
  const particlePositions = mesh.geometry.attributes.position.array;

  // パーティクルの移動許可フラグの配列
  const particleFlag = mesh.geometry.attributes.flag.array;

  // パーティクルの変色検知フラグの配列
  const particleColorChangeFlag = mesh.geometry.attributes.colorChangeFlag.array;


  // ---------------------------------------------------------------------------------------------
  //　フェードイン関係変数定義
  // ---------------------------------------------------------------------------------------------

  // フェードインを何段階で実行するか
  const fadein_times = 4;

  // フェードインの速度（フェードイン完了まで fadein_times × interval_time）
  const interval_time = 500;
  

  // ---------------------------------------------------------------------------------------------
  //　タイマー処理関係変数定義
  // ---------------------------------------------------------------------------------------------

  //クリック時の時間を保持するための変数定義
  var startTime;

  //経過時刻を更新するための変数。 初めはだから0で初期化
  var elapsedTime = 0;

  //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
  var timerId;

  //タイマーをストップ -> 再開させたら0になってしまうのを避けるための変数。
  var timeToadd = 0;

  // スライド時間定義
  var slide_time;

  // アニメーション速度の調整用
  const clock = new THREE.Clock();


  // ---------------------------------------------------------------------------------------------
  //　raycaster関係変数定義
  // ---------------------------------------------------------------------------------------------

  // オブジェクトを格納する配列
  var objects = [];

  // raycaster定義
  var raycaster = new THREE.Raycaster();

  // raycaster用マウス座標
  var mouse_pos = new THREE.Vector2(-2, -2);


  // ---------------------------------------------------------------------------------------------
  //　マウススライド処理関係変数定義
  // ---------------------------------------------------------------------------------------------

  // マウス押し込み位置
  var pushed_pos= new THREE.Vector2();

  // マウスリリース位置
  var released_pos = new THREE.Vector2();

  // マウススライドした距離
  var slide_distance = new THREE.Vector2();

  // マウススライドした距離（絶対値）
  var slide_distance_abs = new THREE.Vector2();


  // ---------------------------------------------------------------------------------------------
  //　パーティクル拡散関係変数定義
  // ---------------------------------------------------------------------------------------------

  // オブジェクト座標
  var mesh_position = {
    x1: mesh.position.x, y1: mesh.position.y, z1: mesh.position.z,
    x2: mesh.rotation.x, y2: mesh.rotation.y, z2: mesh.rotation.z
  };

  // パーティクルの頂点座標
  var particle_pos = new THREE.Vector2();

  // 乱数
  var random_numbers;

  // 正負符号
  var mark = new THREE.Vector2();

  // 乱数×正負符号
  var random_value = new THREE.Vector2();

  // パーティクル拡散時の到達座標
  var destination = new THREE.Vector2();

  // ランダム座標（自動拡散）
  var pos_range_plus = new THREE.Vector2();
  var pos_range_minus = new THREE.Vector2();

  // ランダム座標（自動拡散）
  var random_pos = new THREE.Vector2();

  // 疑似クリック座標（自動拡散）
  var random_pushed_pos = new THREE.Vector2();

  // 拡散方向決定用正負符号（自動拡散）
  var random_direction = new THREE.Vector2();

  // 疑似スライド距離
  var random_slide_distance = new THREE.Vector2();


  // ---------------------------------------------------------------------------------------------
  //　フラグ理関係変数定義
  // ---------------------------------------------------------------------------------------------

  // クリック許可フラグ
  var click_flag = false;
  
  // オブジェクト移動許可フラグ
  var moving_flag = false;

  // raycaster検知フラグ
  var detection = false;

  // 自動アニメーション停止フラグ
  var stopDiffusion = false;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　変数定義 end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // オブジェクトをシーンに追加
  scene.add( mesh );


  // オブジェクトを配列（raycaster用）に追加
  objects.push( mesh );


  // 画面が読み込まれた後にフェードイン開始
  window.setTimeout(() => {

    // // フェードイン実行（FadeIn関数）
    FadeIn(fadein_times-1, interval_time);
  
    // フラグ反転
    window.setTimeout(function(){click_flag = !click_flag}, fadein_times*interval_time);
    window.setTimeout(function(){moving_flag = !moving_flag}, fadein_times*interval_time);
  }, 500);


    // 初期アニメーション　パターン1
    // サイト表示後、拡散したパーティクルが集合する
    // gatherFromFar();

    // 初期アニメーション　パターン2
    // サイト表示後、拡散したパーティクルが集合する
    gather2D();


    // 初期アニメーション　パターン3
    // サイト表示後、拡散したパーティクルが集合する
    // gather3D();


  // デバイスがPCかスマホか判別し処理を分ける
  if (typeof window.ontouchstart === "undefined") {
    // PCの処理
    renderer.domElement.addEventListener('mousedown', pushJudge);
    renderer.domElement.addEventListener('mouseup', diffusion);
  } else {
    // スマホの処理
    renderer.domElement.addEventListener('touchstart', pushJudge);
    renderer.domElement.addEventListener('touchend', diffusion);
  }


  // アニメーションの実行（animate関数）
  animate();


  // 初期化のために実行
  setResize();

  // リサイズイベント発生時に実行
  onResize();

  
  // ロードから一定時間経過後、自動でパーティクルを拡散
  window.setTimeout(() => {
    
    window.setInterval(autoDiffusion, 1000)

    // ウィンドウが非アクティブの場合、アニメーション停止
    window.addEventListener('blur', () => {
      stopDiffusion = !stopDiffusion;
    });
  
    // ウィンドウがアクティブの場合、アニメーション再開
    window.addEventListener('focus', () => {
      stopDiffusion = !stopDiffusion;
    });  

  }, fadein_times*interval_time+5000 + (randomNumbers(5, 1)*1000));



  // パーティクルを変色させる
  window.setTimeout(() => {
    colorChangeStart(88, 0, 219, 219, 212, 0);
  }, fadein_times*interval_time+5000 + (randomNumbers(5, 1)*1000) + 15000);

  colorChangeLoop();
  window.setInterval(colorChangeLoop, 25500); 

  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　関数定義 start
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // ---------------------------------------------------------------------------------------------
  // 関数定義1 Three.jsのアニメーション関数
  // ---------------------------------------------------------------------------------------------

  function animate() {

    var getDeltaTime = clock.getDelta();

    // 画面の描画毎にanimate関数を呼び出す
    requestAnimationFrame( animate );
  
    // レンダラーにシーンとカメラを追加
    renderer.render( scene, camera );
    
    // パーティクル移動速度
    window.setTimeout(() =>{
      mesh.material.uniforms.u_time.value += (2.0 * getDeltaTime);
    }, fadein_times*interval_time-500)

    // Tween.jsアニメーションの実行
    TWEEN.update();
    
    // 頂点の透明度の更新を許可
    mesh.geometry.attributes.alpha.needsUpdate = true;

    // 頂点の座標の更新を許可
    mesh.geometry.attributes.position.needsUpdate = true;

    // 頂点の色の更新を許可
    mesh.geometry.attributes.color.needsUpdate = true;

    // 頂点の移動検知フラグの更新を許可
    mesh.geometry.attributes.flag.needsUpdate = true;

    // 頂点の変色検知フラグの更新を許可
    mesh.geometry.attributes.colorChangeFlag.needsUpdate = true;
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義2　リサイズ対応
  // ---------------------------------------------------------------------------------------------

  function setResize() {

    console.log(resized_width)
    // ウィンドウサイズを取得
    const width = window.innerWidth;
    const height = window.innerHeight;

    // ヘッダーの高さ
    const header_height = document.getElementById("header_nav").clientHeight;

    // canvasのmargin-topにheaderの高さを設定
    canvas.style.marginTop = header_height + "px";


    // ブレイクポイントの設定
    const width_break_point = 700;
    const height_break_point = 864;

    const width_break_point_sp = 1440;


    // カメラのアスペクト比を正す
    camera.aspect = width / (height -  header_height);
    camera.updateProjectionMatrix();

    // デバイスがPCの場合
    if (typeof window.ontouchstart === "undefined") {
      if (width >= width_break_point) {
        camera.position.z = 400;
        if (height <= height_break_point) {
           // mesh.material.uniforms.u_value.value = ((width + height) / 800) - ((1200 + height) / width)
           mesh.material.uniforms.u_value.value = ((width + height) / 1000) - ((1200 + height) / width);
        } else {
          // mesh.material.uniforms.u_value.value = ((width + height) / 500) - ((1200 + height) / width);
          mesh.material.uniforms.u_value.value = ((width + height) / 600) - ((1200 + height) / width);
        }
      } else {
        camera.position.z = height / width * 400;
        mesh.material.uniforms.u_value.value = ((width + height) / 1800) - ((1200 + height) / width);
      }
      
      // デバイスがモバイルの場合
    } else {
      if (width >= width_break_point_sp) {
        if (width < height) {
          camera.position.z = height / width * 500;
          mesh.material.uniforms.u_value.value = ((width + height) / 500) - ((1200 + height) / width);
        } else {
          if  (camera.aspect > 1.85) {
            camera.position.z = width / height * 250;
            mesh.material.uniforms.u_value.value = ((width + height) / 800) - ((2800 + height) / width);
          } else {
            camera.position.z = width / height * 350;
            mesh.material.uniforms.u_value.value = ((width + height) / 500) - ((2800 + height) / width);
          }
        }
      } else {
        if (width < height) {
          camera.position.z = height / width * 400;
          mesh.material.uniforms.u_value.value = ((width + height) / 500) - ((1600 + height) / width);
          nav_block.style.bottom = height*0.15 + 'px';
        } else {
          if (camera.aspect > 1.8) {
            camera.position.z = width / height * 250;
            mesh.material.uniforms.u_value.value = ((width + height) / 800) - ((3400 + height) / width);
            nav_block.style.display = 'none'
          } else {
            camera.position.z = width / height * 350;
            mesh.material.uniforms.u_value.value = ((width + height) / 800) - ((2800 + height) / width);
            nav_block.style.bottom = height*0.15 + 'px';
          }
        }
      }
    }

    // レンダラーのサイズを調整する
    renderer.setSize(width, height -  header_height);

    // ウィンドウサイズ更新
    resized_width = window.innerWidth;
    resized_height = window.innerHeight;
    
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義3　リサイズ対応
  // ---------------------------------------------------------------------------------------------

  function onResize() {
    var currentWidth = window.innerWidth;
    var currentHeight = window.innerHeight;
    
    window.addEventListener("resize", function() {
  
      if (currentWidth == window.innerWidth & typeof window.ontouchstart != "undefined") {
  
        // インタラクションガイドの位置を変更。
        if (currentHeight < window.innerHeight) {
          nav_block.style.bottom = (height*0.15 + 80) + 'px';
        } else {
          nav_block.style.bottom = height*0.15 + 'px';
        }
  
        // ウインドウ横幅が変わっていないためレンダラーのリサイズはなし。
        return;
      }
      
      // ウインドウ横幅が変わったのでリサイズと見なす。
      // 横幅を更新
      currentWidth = window.innerWidth;
      setResize();
    });
  
  }



  // ---------------------------------------------------------------------------------------------
  // 関数定義4 webglでがデータを扱いやすいように画像データを変換
  // ---------------------------------------------------------------------------------------------

  function ImagePixel(path, w, h, ratio) {

    // canvasの設定
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const canvas_width = w;
    const canvas_height = h;
    canvas.width = canvas_width;
    canvas.height = canvas_height;

    // 画像データの描画
    ctx.drawImage(path, 0, 0);
    const data = ctx.getImageData(0, 0, canvas_width, canvas_height).data;

    // 座標情報
    const position = [];
    // 色情報
    const color = [];
    // 透明度
    const alpha = [];

    for (let y = 0; y < canvas_height; y += ratio) {
      for (let x = 0; x < canvas_width; x += ratio) {

        // 配列内の任意の[x、y]ピクセルの位置を取得
        const index = (y * canvas_width + x) * 4;

        // webglは原点が中心となり、xは右がプラス左がマイナス。yは上がプラス下がマイナス。
        const pX = x - canvas_width / 2;
        const pY = -(y - canvas_height / 2);
        const pZ = 0;

        // カラージェネレーターで選定した色を出現させる（出現し得る色は5種類 rgb値で指定）
        var rgb_vals = [
          [(88/255).toFixed(2), (0/255).toFixed(2), (219/255).toFixed(2)],
          [(219/255).toFixed(2), (47/255).toFixed(2), (7/255).toFixed(2)],
          [(0/255).toFixed(2), (102/255).toFixed(2), (219/255).toFixed(2)],
          [(219/255).toFixed(2), (212/255).toFixed(2), (0/255).toFixed(2)],
          [(0/255).toFixed(2), (219/255).toFixed(2), (144/255).toFixed(2)]
        ];

        const rgb_val =rgb_vals[Math.floor(Math.random() * rgb_vals.length)]

        const r = rgb_val[0];
        const g = rgb_val[1];
        const b = rgb_val[2];


        // webglでは透明度を0~1の範囲で表現するので、255で割って数値を0~1の範囲に変換
        const a = data[index + 3] / 255;
        
        // 座標、色、透明度の値を配列に追加
        if (a > 0) {
          position.push(pX, pY, pZ), color.push(r, g, b), alpha.push(a);
        }
      }
    }

    return { position, color, alpha };
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義5 透明度前処理（異なる透明度の値を割り振ってパーティクルをグループ化）
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
  // 関数定義6 フェードインアニメーション設定
  // ---------------------------------------------------------------------------------------------

  function PostProcessing(sampling_times, interval_time) {

    // パーティクルの全頂点をTween.jsによりアニメーションさせる
    for (let i = 0; i < vertces; i++) {
      var vertex = {x: particleAlpha[i], y:particleFlag[i]};
      var tween = new TWEEN.Tween(vertex);
      tween.to({x: 1, y: 1}, interval_time+1000);

      // 透明度の低いパーティクルから順番に出現させる
      for (j = 0; j < sampling_times; j++) {
        if (particleAlpha[i] === 0.5 **  (j + 6)) {
          tween.delay(j * (interval_time));
          tween.start();
        }
      }

      tween.onUpdate(function(object) {
          particleAlpha[i] = object.x;
          particleFlag[i] = object.y;
      })
    }
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義7 フェードインアニメーション実行
  // ---------------------------------------------------------------------------------------------

  function FadeIn(sampling_time, interval_time) {
    PreProcessing(sampling_time);
    PostProcessing(sampling_time + 1, interval_time);
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義8　初期アニメーション　パターン1
  // ---------------------------------------------------------------------------------------------

  function gatherFromFar() {
    gsap.set(mesh.material.uniforms.u_ratio, {
      value: 10000.0,
    });
    
    window.setTimeout(() => {
      gsap.to(mesh.material.uniforms.u_ratio, {
        value: 0.0,
        duration: 5,
        ease: "power4.out",
      })
    }, 0);
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義9　初期アニメーション　パターン2
  // ---------------------------------------------------------------------------------------------

  function gather2D() {
    for (let i = 0; i < vertces; i++) {
      particlePositions[3*i] = randomNumbers(600, 0) * plusMinus();
      particlePositions[3*i+1] = randomNumbers(600, 0) * plusMinus();
  
       // パーティクルの座標
       particle_pos.x = attribute.getX(i)*(500/camera.position.z) - 8;
       particle_pos.y = attribute.getY(i)*(500/camera.position.z) + 8
  
       // オブジェクト頂点座標
       var vertex_position = {x: attribute.getX(i), y: attribute.getY(i)};
  
      var gathering2d = new TWEEN.Tween(vertex_position);
      gathering2d.to({x:pixcel_img.position[3*i], y: pixcel_img.position[3*i+1]},3000);
      gathering2d.easing( TWEEN.Easing.Quadratic.Out );
      gathering2d.onUpdate(function (object) {
        particlePositions[3*i] = object.x;
        particlePositions[3*i+1] = object.y;
      });
      gathering2d.start();
    }
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義10　初期アニメーション　パターン3
  // ---------------------------------------------------------------------------------------------

  function gather3D() {
    for (let i = 0; i < vertces; i++) {
      particlePositions[3*i] = randomNumbers(600, 0) * plusMinus();
      particlePositions[3*i+1] = randomNumbers(600, 0) * plusMinus();
      particlePositions[3*i+2] = 1000;
  
       // パーティクルの座標
       particle_pos.x = attribute.getX(i)*(500/camera.position.z) - 8;
       particle_pos.y = attribute.getY(i)*(500/camera.position.z) + 8;
       particle_pos.z = attribute.getZ(i)*(500/camera.position.z);
  
       // オブジェクト頂点座標
       var vertex_position = {x: attribute.getX(i), y: attribute.getY(i), z: attribute.getZ(i)};
  
      var gathering3d = new TWEEN.Tween(vertex_position);
      gathering3d.to({x:pixcel_img.position[3*i], y: pixcel_img.position[3*i+1], z: pixcel_img.position[3*i+2]},3000);
      gathering3d.easing( TWEEN.Easing.Quadratic.Out );
      gathering3d.onUpdate(function (object) {
        particlePositions[3*i] = object.x;
        particlePositions[3*i+1] = object.y;
        particlePositions[3*i+2] = object.z;
      });
      gathering3d.start();
    }
  }



  // ---------------------------------------------------------------------------------------------
  // 関数定義11 タイマー関数（スライド時間の取得）
  // ---------------------------------------------------------------------------------------------

  function countUp(){

    //timerId変数はsetTimeoutの返り値になるので代入する
    timerId = setTimeout(function(){

        //経過時刻は現在時刻をミリ秒で示すDate.now()からstartを押した時の時刻(startTime)を引く
        elapsedTime = Date.now() - startTime + timeToadd;

        //countUp関数自身を呼ぶことで10ミリ秒毎に以下の計算を始める
        countUp();

        //1秒以下の時間を表示するために10ミリ秒後に始めるよう宣言
      },10);

      slide_time = elapsedTime / 1000
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義12 タイマーリセット関数
  // ---------------------------------------------------------------------------------------------

  function resetTimer() {

    //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
    clearTimeout(timerId);


    //タイマーに表示される時間elapsedTimeが現在時刻かたスタートボタンを押した時刻を引いたものなので、
    //タイマーを再開させたら0になってしまう。elapsedTime = Date.now - startTime
    //それを回避するためには過去のスタート時間からストップ時間までの経過時間を足してあげなければならない。elapsedTime = Date.now - startTime + timeToadd (timeToadd = ストップを押した時刻(Date.now)から直近のスタート時刻(startTime)を引く)
    timeToadd += Date.now() - startTime;
    //経過時刻を更新するための変数elapsedTimeを0にしてあげつつ、updateTimetTextで0になったタイムを表示。
    elapsedTime = 0;

    //リセット時に0に初期化したいのでリセットを押した際に0を代入してあげる
    timeToadd = 0;
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義13 マウス押し込み判定
  // ---------------------------------------------------------------------------------------------

  function pushJudge(event) {

    // マウスを押し込んだ位置の座標を記憶（PC）
    pushed_pos.x = event.clientX - (resized_width / 2);
    pushed_pos.y = - (event.clientY - (resized_height / 2)) + header_height + camera.position.y;
    
    
    // raycaster用マウス座標取得
    mouse_pos.x = ( event.clientX / resized_width ) * 2 - 1;
    mouse_pos.y = - ( event.clientY / resized_height ) * 2 + 1;


    // タップした位置の座標を記憶（スマホ）
    if (typeof window.ontouchstart != "undefined") {
      pushed_pos.x = event.changedTouches[0].pageX - (resized_width / 2);
      pushed_pos.y = - (event.changedTouches[0].pageY - (resized_height / 2)) + header_height + camera.position.y;

        // raycaster用マウス座標取得
      mouse_pos.x = ( event.changedTouches[0].pageX / resized_width ) * 2 - 1;
      mouse_pos.y = - ( event.changedTouches[0].pageY / resized_height ) * 2 + 1;
    }


    // raycasterセット
    raycaster.setFromCamera( mouse_pos, camera );


    // raycasterがオブジェクトと接触しているか検知
    var intersects = raycaster.intersectObjects( objects );


    // raycasterがオブジェクトと接触していれば以降の処理を行う
    if ( intersects.length > 0 ) {

      event.preventDefault();

      // raycaster検知フラグ反転
      detection = !detection
    }


    // タイマーカウントアップ処理
    //在時刻を示すDate.nowを代入
    startTime = Date.now();

    //再帰的に使えるように関数を作る
    countUp();

  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義14 マウススライド後のパーティクル拡散
  // ---------------------------------------------------------------------------------------------

  function diffusion(event) {

    // raycasterがオブジェクトを検知していれば以降の処理を行う
    if (detection) {
      event.preventDefault();
    }


    // マウスを放した位置の座標を記憶（PC）
    released_pos.x = event.clientX - (resized_width / 2);
    released_pos.y = - (event.clientY - (resized_height / 2)) + header_height + camera.position.y;

    // タップを放したした位置の座標を記憶（スマホ）
    if (typeof window.ontouchstart != "undefined") {
      released_pos.x = event.changedTouches[0].pageX - (resized_width / 2);
      released_pos.y = - (event.changedTouches[0].pageY - (resized_height / 2)) + header_height + camera.position.y;
    }


    // マウスを押し込んでスライドした距離
    slide_distance.x = released_pos.x - pushed_pos.x;
    slide_distance.y = released_pos.y - pushed_pos.y;
    slide_distance_abs.x = Math.abs(slide_distance.x);
    slide_distance_abs.y = Math.abs(slide_distance.y);


    if (click_flag) {
      for (let i = 0; i < vertces; i++) {
        
        // パーティクルの座標
        particle_pos.x = attribute.getX(i)*(500/camera.position.z) - 8;
        particle_pos.y = attribute.getY(i)*(500/camera.position.z) + 8;


        // オブジェクト頂点座標
        var vertex_position = {x: attribute.getX(i), y: attribute.getY(i), z: particleFlag[i]};
        

        // スライド開始座標からパーティクルまでの距離
        var distance = Math.sqrt( Math.pow( particle_pos.x - pushed_pos.x, 2 ) + Math.pow( particle_pos.y - pushed_pos.y, 2 ) ) ;


        // スマホの場合はパーティクルが吹き飛びやすくする
        if (typeof window.ontouchstart != "undefined") {
          var power = 3;
        } else {
          var power = 2;
        }


        if (particleFlag[i] === 1) {
          // スライド開始座標からパーティクルまでの距離が10より小さい場合、拡散対象に設定
          if (distance < (5 / (slide_time * 6)) * power & slide_time > 0.01) {

            particleFlag[i] = 0;
            
            // スライド方向がx軸の正の方向、かつy軸のスライド量の絶対値が20より小さい場合
            if (slide_distance.x > 0 & slide_distance_abs.y < 20) {
  
              // 画面右方向に拡散させる
              mark.x = 1;
              mark.y = 0;
              random_numbers = randomNumbers(50, 40);
              
            } 
            // スライド方向がx軸の負の方向、かつy軸のスライド量の絶対値が20より小さい場合
            else if (slide_distance.x < 0 & slide_distance_abs.y < 20) {
              
              // 画面左方向に拡散させる
              mark.x = -1;
              mark.y = 0;
              random_numbers = randomNumbers(50, 40);
              
            }
            
            // スライド方向がy軸の正の方向、かつy軸のスライド量の絶対値が20より大きい場合
            else if (slide_distance.y > 0 & slide_distance_abs.y >= 20) {
              
              // 画面上方向に拡散させる
              mark.x = 0;
              mark.y = 1;
              random_numbers = randomNumbers(50, 40);
              
            } 
            // スライド方向がy軸の負の方向、かつy軸のスライド量の絶対値が20より大きい場合
            else if (slide_distance.y < 0 & slide_distance_abs.y >= 20) {
              
              // 画面下方向に拡散させる
              mark.x = 0;
              mark.y = -1;
              random_numbers = randomNumbers(50, 40);
              
            }
              // スライドではなくクリックの場合は拡散させない
            else if (slide_distance_abs.x < 5 | slide_distance_abs.y < 5) {
              return
            }
            
            // 拡散方向・距離の決定
            random_value.x = random_numbers * mark.x;
            random_value.y = random_numbers * mark.y;
  

            // パーティクル拡散時の到達座標
            destination.x = particlePositions[3*i] + random_value.x + (slide_distance.x / (slide_time * 20));
            destination.y = particlePositions[3*i+1] + random_value.y + (slide_distance.y / (slide_time * 20));


            // パーティクルのTweenアニメーション
            var diffusion = new TWEEN.Tween(vertex_position);
            diffusion.to({x:destination.x, y: destination.y, z: 0}, (slide_time*30000));
            diffusion.easing( TWEEN.Easing.Quadratic.Out );
            diffusion.onUpdate(function (object) {
              particlePositions[3*i] = object.x;
              particlePositions[3*i+1] = object.y;
              particleFlag[i] = object.z;
            });
            diffusion.repeat(1);
            diffusion.yoyo(true);


            // オブジェクトのTweenアニメーション
            var mesh_move = new TWEEN.Tween(mesh_position);
            mesh_move.to({
                x1: destination.x / (slide_time*1000), y1: destination.y*(-1) / (slide_time*1000), z1: mesh.position.z + (2000 / (slide_time*300)), 
                x2: destination.y / 1000 * (-1), y2: destination.x / 1000 * -1,
            }, slide_time*100000);
            mesh_move.delay(2000);
            mesh_move.onUpdate(function (object) {
              mesh.position.x = object.x1;
              mesh.position.y = object.y1;
              mesh.position.z = object.z1;
              mesh.rotation.x = object.x2;
              mesh.rotation.y = object.y2;
            });
            mesh_move.repeat(1);
            mesh_move.yoyo(true);


            // パーティクル拡散
            diffusion.start();


            // インタラクションガイド(top_sub.jsで定義)を非表示
            nav_block.style.opacity = 0;
            nav_block.style.visibility = "hidden";


            // スライド可否フラグ反転
            slide_flag = !slide_flag


            // オブジェクト移動
            if (moving_flag) {
              mesh_move.start();
              moving_flag = !moving_flag
              window.setTimeout(function() {moving_flag = !moving_flag}, slide_time*100000*2 + 4000)
            }
          }
        }
        
      }
    }
    

    resetTimer();

    // raycaster検知フラグをリセット
    detection = !detection;
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義15　乱数生成
  // ---------------------------------------------------------------------------------------------

  function randomNumbers(max, min) {

    // 整数の乱数を生成する
    return Math.floor( Math.random() * max + 1 - min ) + min;

  }
  

  // ---------------------------------------------------------------------------------------------
  // 関数定義16　正負の符号決定
  // ---------------------------------------------------------------------------------------------

  function plusMinus() {

    var plus_and_minus = [1, -1];

    return plus_and_minus[Math.floor(Math.random() * plus_and_minus.length)];

  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義17　パーティクルの自動アニメーション
  // ---------------------------------------------------------------------------------------------

  function autoDiffusion() {

    if (stopDiffusion) {
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


    // スマホの場合はパーティクルが吹き飛びにくくする
    if (typeof window.ontouchstart != "undefined") {
      var diameter = 30;
    } else {
      var diameter = 20;
    }

    
    // パーティクル拡散距離方向を決定するための乱数生成
    random_numbers = randomNumbers(200, 50);
    var direction_coefs = [[Math.random(), Math.random()], [-1 * Math.random(), Math.random()], [Math.random(), -1 * Math.random()], [-1* Math.random(), -1 * Math.random()]]
    var direction_coef = direction_coefs[Math.floor(Math.random() * direction_coefs.length)];

    // x, y方向のために2種類生成
    var direction_coef_first = random_numbers * direction_coef[0];
    var direction_coef_second = random_numbers * direction_coef[1];
    
    
    if (click_flag) {
      for (let i = 0; i < vertces; i++) {
        
        // パーティクルの座標
        var x = attribute.getX(i)*(500/camera.position.z) - 8;
        var y = attribute.getY(i)*(500/camera.position.z) + 8;
        
        var vertex_position = {x: attribute.getX(i), y: attribute.getY(i), z: particleFlag[i]};
        

        // 疑似クリック・タップ座標からパーティクルまでの距離
        var distance = Math.sqrt( Math.pow( x - random_pushed_pos.x, 2 ) + Math.pow( y - random_pushed_pos.y, 2 ) ) ;
        

        // パーティクルの拡散方向（上下左右の4通り）
        var directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        var direction = directions[Math.floor(Math.random() * directions.length)];
        
        random_direction.x = direction[0];
        random_direction.y = direction[1];
        

        // 疑似スライド時間の作成
        var random_slide_time = randomNumbers(110, 80) * 0.001;
        
        
        if (particleFlag[i] === 1) {
          
          // スライド開始座標からパーティクルまでの距離が30より小さい場合、拡散対象に設定
          if (distance < diameter) {
            
            particleFlag[i] = 0;

            // 減衰係数
            var attenuation_coefficient = randomNumbers(300, 280) * randomNumbers(1500, 1000);
  

            // パーティクル拡散時の到達座標
            destination.x = particlePositions[3*i] + (direction_coef_first) + (random_slide_distance.x / (random_slide_time * attenuation_coefficient));
            destination.y = particlePositions[3*i+1] + (direction_coef_second)  + (random_slide_distance.y / (random_slide_time * attenuation_coefficient));


            // パーティクル拡散のTweenアニメーション
            var auto_diffusion = new TWEEN.Tween(vertex_position);
            auto_diffusion.to({x:destination.x, y: destination.y, z: 0}, (random_slide_time*attenuation_coefficient));
            auto_diffusion.easing( TWEEN.Easing.Quadratic.Out );
            auto_diffusion.onUpdate(function (object) {
              particlePositions[3*i] = object.x;
              particlePositions[3*i+1] = object.y;
              particleFlag[i] = object.z;
            });
            auto_diffusion.repeat(1);
            auto_diffusion.yoyo(true);


            // オブジェクト移動のTweenアニメーション
            var auto_move = new TWEEN.Tween(mesh_position);
            auto_move.to({
                x1: destination.x / (random_slide_time*1000), y1: destination.y*(-1) / (random_slide_time*1000), z1: mesh.position.z + (2000 / (random_slide_time*500)), 
                x2: destination.y / 1000 * (-1), y2: destination.x / 1000 * -1,
            },10000);
            auto_move.delay(2000);
            auto_move.onUpdate(function (object) {
              mesh.position.x = object.x1;
              mesh.position.y = object.y1;
              mesh.position.z = object.z1;
              mesh.rotation.x = object.x2;
              mesh.rotation.y = object.y2;
            });

            var auto_return = new TWEEN.Tween(mesh_position);
            auto_return.to({
                x1: mesh.position.x, y1: mesh.position.y, z1: mesh.position.z, 
                x2: mesh.rotation.x, y2: mesh.rotation.y,
            },10000);
            auto_return.delay(2000);
            auto_return.onUpdate(function (object) {
              mesh.position.x = object.x1;
              mesh.position.y = object.y1;
              mesh.position.z = object.z1;
              mesh.rotation.x = object.x2;
              mesh.rotation.y = object.y2;
            });

            auto_move.chain(auto_return);

            // パーティクル拡散
            auto_diffusion.start();


            // スライドフラグ反転
            slide_flag = !slide_flag


            // オブジェクト移動（視点が極端に近づかないように制限）
            if (moving_flag & mesh.position.z + (2000 / (random_slide_time*500)) <= (camera.position.z * 0.3)) {
              auto_move.start();
              moving_flag = !moving_flag
              window.setTimeout(function(){moving_flag = !moving_flag}, 12000*2)
            }
          }
        }
      }
    }
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義18　変色スタート
  // ---------------------------------------------------------------------------------------------

  function colorChangeStart(from_r, from_g, from_b, to_r, to_g, to_b) {
    for (let i=0; i < vertces; i++) {
      if (particleColor[3*i].toFixed(2) === (from_r/255).toFixed(2) | particleColor[3*i+1].toFixed(2) === (from_g/255).toFixed(2) | particleColor[3*i+2].toFixed(2) === (from_b/255).toFixed(2)) {
        var vertex_color = {r: particleColor[3*i], g: particleColor[3*i+1], b: particleColor[3*i+2], f: particleColorChangeFlag[i]};
        var coloration = new TWEEN.Tween(vertex_color);
        coloration.to({r: (to_r/255).toFixed(2), g: (to_g/255).toFixed(2), b: (to_b/255).toFixed(2), f: 1}, 5000);
        coloration.onUpdate(function (object) {
          particleColor[3*i] = object.r;
          particleColor[3*i+1] = object.g;
          particleColor[3*i+2] = object.b;
          particleColorChangeFlag[i] = object.f;
        });
        coloration.start();
      }
    }
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義19　変色アニメーション（初回後）
  // ---------------------------------------------------------------------------------------------

  function colorChange(from_r, from_g, from_b, to_r, to_g, to_b) {
    for (let i=0; i < vertces; i++) {
      if (particleColorChangeFlag[i] === 1 & (particleColor[3*i].toFixed(2) === (from_r/255).toFixed(2) | particleColor[3*i+1].toFixed(2) === (from_g/255).toFixed(2) | particleColor[3*i+2].toFixed(2) === (from_b/255).toFixed(2))) {
        var vertex_color = {r: particleColor[3*i], g: particleColor[3*i+1], b: particleColor[3*i+2], f: particleColorChangeFlag[i]};
        var coloration = new TWEEN.Tween(vertex_color);
        coloration.to({r: (to_r/255).toFixed(2), g: (to_g/255).toFixed(2), b: (to_b/255).toFixed(2)}, 5000);
        coloration.onUpdate(function (object) {
          particleColor[3*i] = object.r;
          particleColor[3*i+1] = object.g;
          particleColor[3*i+2] = object.b;
        });
        coloration.start();
      }
    }
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義20　変色ループ
  // ---------------------------------------------------------------------------------------------

  function colorChangeLoop() {

    window.setTimeout(() => {
      colorChange(219, 212, 0, 88, 0, 219);
    }, 15000)
  
    window.setTimeout(() => {
      colorChange(88, 0, 219, 0, 102, 219);
    }, 30000)

    window.setTimeout(() => {
      colorChange(0, 102, 219, 219, 212, 0);
    }, 45000)
  }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　関数定義 end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
});

