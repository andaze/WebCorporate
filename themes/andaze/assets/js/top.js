// ---------------------------------------------------------------------------------------------
//　3D空間のセットアップ・オブジェクトの生成
// ---------------------------------------------------------------------------------------------

// シーンの作成
var scene = new THREE.Scene();

// カメラの作成
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// カメラ位置設定
camera.position.z = 260;
camera.position.x = 0;
camera.position.y = 20;


// レンダラーの作成
var renderer = new THREE.WebGLRenderer();


// レンダラーが描画するキャンバスサイズの設定
renderer.setSize( window.innerWidth, window.innerHeight );


// キャンバスをDOMツリーに追加
const wrapper = document.querySelector("#webgl");
wrapper.appendChild(renderer.domElement);


// ジオメトリーの作成
const geometry = new THREE.BufferGeometry();


// 画像要素を生成
const img = new Image();

// 表示させる画像のパスを指定
img.src = "img/logo_2_min.png";
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

  // オブジェクト移動許可フラグの生成
  const flag = [];
  for (let i = 0; i < vertces; i++) {
    flag.push(1);
  }
  const flags = new THREE.BufferAttribute(new Float32Array(flag), 1);

  
  // 各パラメータをジオメトリーに登録
  geometry.setAttribute("position", position);
  geometry.setAttribute("color", color);
  geometry.setAttribute("alpha", alpha);
  geometry.setAttribute("rand", rands);
  geometry.setAttribute("flag", flags);
  
  
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
  

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　変数定義 start
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  

  // ---------------------------------------------------------------------------------------------
  //　ジオメトリ関係変数定義
  // ---------------------------------------------------------------------------------------------
  
  // ジオメトリの頂点座標の配列
  var attribute = mesh.geometry.attributes.position;
  
  // パーティクルの透明度の配列
  const particleAlpha =mesh.geometry.attributes.alpha.array;

  // パーティクルの色配列
  const particleColor =mesh.geometry.attributes.color.array;

  // パーティクルの移動許可フラグの配列
  const particleFlag = mesh.geometry.attributes.flag.array;


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

  var slide_time;



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
  //　フラグ理関係変数定義
  // ---------------------------------------------------------------------------------------------

  // クリック許可フラグ
  var click_frag = false;
  
  // カメラ移動許可フラグ
  var camera_flag = false;


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　変数定義 end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // オブジェクトをシーンに追加
  scene.add( mesh );


  // // 座標軸を表示
  // var axes = new THREE.AxisHelper(125);
  // scene.add(axes);


  // // フェードイン実行（FadeIn関数）
  FadeIn(3);

  window.setTimeout(reverse_click_flag, 4*2000);
  window.setTimeout(reverse_camera_flag, 4*2000);

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
  onResize();

  // リサイズイベント発生時に実行
  window.addEventListener('resize', onResize);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　関数定義 start
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
      var vertex = {x: particleAlpha[i], y:particleFlag[i]};
      var tween = new TWEEN.Tween(vertex);
      tween.to({x: 1, y: 1}, 3000);

      // 透明度の低いパーティクルから順番に出現させる
      for (j = 0; j < sampling_times; j++) {
        if (particleAlpha[i] === 0.5 **  (j + 6)) {
          tween.delay(j * 2000);
          tween.start();
          // if (j === sampling_times - 2){
          //   particleColor[3*i] = 255;
          //   particleColor[3*i+1] = 255;
          //   particleColor[3*i+2] = 255;
          // }
        }
      }

      tween.onUpdate(function(object) {
          particleAlpha[i] = object.x;
          particleFlag[i] = object.y;
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
  // 関数定義5 クリックフラグの反転
  // ---------------------------------------------------------------------------------------------

  function reverse_click_flag() {
    if (click_frag == false) {
      click_frag = true;
    } else {
      click_frag = false;
    }
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義6 カメラ移動フラグの反転
  // ---------------------------------------------------------------------------------------------

  function reverse_camera_flag() {
    if (camera_flag === false) {
      camera_flag = true;
    } else if (camera_flag === true) {
      camera_flag = false;
    }
  }
  

  // ---------------------------------------------------------------------------------------------
  // 関数定義7 タイマー関数（スライド時間の取得）
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
  // 関数定義8 マウス押し込み判定
  // ---------------------------------------------------------------------------------------------

  function pushJudge(event) {

    event.preventDefault();
    
    // マウスを押し込んだ位置の座標を記憶（PC）
    pushed_pos.x = event.clientX - (window.innerWidth / 2);
    pushed_pos.y = - (event.clientY - (window.innerHeight / 2)) + camera.position.y;

    // タップした位置の座標を記憶（スマホ）
    if (typeof window.ontouchstart != "undefined") {
      pushed_pos.x = event.changedTouches[0].pageX - (window.innerWidth / 2) - 20;
      pushed_pos.y = - (event.changedTouches[0].pageY - (window.innerHeight / 2)) + 20 + camera.position.y;
    }

    // タイマーカウントアップ処理
    //在時刻を示すDate.nowを代入
    startTime = Date.now();

    //再帰的に使えるように関数を作る
    countUp();

  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義9 マウススライド後のパーティクル拡散
  // ---------------------------------------------------------------------------------------------

  function diffusion(event) {

    event.preventDefault();
    
    const particlePositions = mesh.geometry.attributes.position.array;

    // マウスを放した位置の座標を記憶（PC）
    released_pos.x = event.clientX - (window.innerWidth / 2);
    released_pos.y = - (event.clientY - (window.innerHeight / 2)) + camera.position.y;

    // タップを放したした位置の座標を記憶（スマホ）
    if (typeof window.ontouchstart != "undefined") {
      released_pos.x = event.changedTouches[0].pageX - (window.innerWidth / 2) - 20;
      released_pos.y = - (event.changedTouches[0].pageY - (window.innerHeight / 2)) + 20 + camera.position.y;
    }

    // マウスを押し込んでスライドした距離
    slide_distance.x = released_pos.x - pushed_pos.x;
    slide_distance.y = released_pos.y - pushed_pos.y;
    slide_distance_abs.x = Math.abs(slide_distance.x);
    slide_distance_abs.y = Math.abs(slide_distance.y);

    if (click_frag==true) {
      for (let i = 0; i < vertces; i++) {
        
        // パーティクルの座標
        var x = attribute.getX(i)*(500/camera.position.z) - 8;
        var y = attribute.getY(i)*(500/camera.position.z) + 8;

        var vertex_position = {x: attribute.getX(i), y: attribute.getY(i), z: particleFlag[i]};

        // カメラの座標
        var camera_position = {x1: camera.position.x, y1: camera.position.y, z1: camera.position.z, x2: camera.rotation.x, y2: camera.rotation.y};
        
        // スライド開始座標からパーティクルまでの距離
        var distance = Math.sqrt( Math.pow( x - pushed_pos.x, 2 ) + Math.pow( y - pushed_pos.y, 2 ) ) ;

        var mark_x;
        var mark_y;

        var random_numbers;

        if (particleFlag[i] === 1) {
          // スライド開始座標からパーティクルまでの距離が10より小さい場合、拡散対象に設定
          if (distance < (10 / (slide_time * 6)) & slide_time > 0.01) {

            particleFlag[i] = 0;
            
            // スライド方向がx軸の正の方向、かつy軸のスライド量の絶対値が20より小さい場合
            if (slide_distance.x > 0 & slide_distance_abs.y < 20) {
  
              // 画面右方向に拡散させる
              mark_x = 1;
              mark_y = 0;
              random_numbers = Math.floor( Math.random() * 50 + 1 -40 ) + 40;
              
            } 
            // スライド方向がx軸の負の方向、かつy軸のスライド量の絶対値が20より小さい場合
            else if (slide_distance.x < 0 & slide_distance_abs.y < 20) {
              
              // 画面左方向に拡散させる
              mark_x = -1;
              mark_y = 0;
              random_numbers = Math.floor( Math.random() * 50 + 1 -40 ) + 40;
              
            }
            
            // スライド方向がy軸の正の方向、かつy軸のスライド量の絶対値が20より大きい場合
            else if (slide_distance.y > 0 & slide_distance_abs.y >= 20) {
              
              // 画面上方向に拡散させる
              mark_x = 0;
              mark_y = 1;
              random_numbers = Math.floor( Math.random() * 50 + 1 -40 ) + 40;
              
            } 
            // スライド方向がy軸の負の方向、かつy軸のスライド量の絶対値が20より大きい場合
            else if (slide_distance.y < 0 & slide_distance_abs.y >= 20) {
              
              // 画面下方向に拡散させる
              mark_x = 0;
              mark_y = -1;
              random_numbers = Math.floor( Math.random() * 20 + 1 -10 ) + 10;
              
            }
             // スライドではなくクリックの場合は拡散させない
            else if (slide_distance_abs.x < 5 | slide_distance_abs.y < 5) {
              return
            }
            
            var random_value_x = random_numbers * mark_x;
            var random_value_y = random_numbers * mark_y;
  
            // パーティクルの飛距離
            var pos_x = particlePositions[3*i] + random_value_x + (slide_distance.x / (slide_time * 20));
            var pos_y = particlePositions[3*i+1] + random_value_y + (slide_distance.y / (slide_time * 20));

            var diffusion = new TWEEN.Tween(vertex_position);
            diffusion.to({x:pos_x, y: pos_y, z: 0}, (slide_time*30000));
            diffusion.easing( TWEEN.Easing.Quadratic.Out );
            diffusion.onUpdate(function (object) {
              particlePositions[3*i] = object.x;
              particlePositions[3*i+1] = object.y;
              particleFlag[i] = object.z;
            });
            diffusion.repeat(1);
            diffusion.yoyo(true);

            var camera_move = new TWEEN.Tween(camera_position);
            camera_move.to({x1: pos_x / (slide_time*1000), y1: pos_y*(-1) / (slide_time*1000), z1: camera.position.z - (2000 / (slide_time*300)), x2: pos_y / 1000 * (-1), y2: pos_x / 1000 * -1}, slide_time*100000);
            camera_move.delay(2000);
            camera_move.onUpdate(function (object) {
              camera.position.x = object.x1;
              camera.position.y = object.y1;
              camera.position.z = object.z1;
              camera.rotation.x = object.x2;
              camera.rotation.y = object.y2;
            });
            camera_move.repeat(1);
            camera_move.yoyo(true);

            diffusion.start();

            if (camera_flag === true) {
              camera_move.start();
              reverse_camera_flag();
              window.setTimeout(reverse_camera_flag, slide_time*100000*2 + 4000)
            }
          }
        }
        
      }
    }
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
  // 関数定義10 Three.jsのアニメーション関数
  // ---------------------------------------------------------------------------------------------

  function animate() {
    // 画面の描画毎にanimate関数を呼び出す
    requestAnimationFrame( animate );
  
    // レンダラーにシーンとカメラを追加
    renderer.render( scene, camera );
    
    // パーティクル移動速度
    mesh.material.uniforms.u_time.value += 0.1;

    // controls.update();

    // Tween.jsアニメーションの実行
    TWEEN.update();
    
    // 透明度の更新を許可
    mesh.geometry.attributes.alpha.needsUpdate = true;

    mesh.geometry.attributes.position.needsUpdate = true;

    mesh.geometry.attributes.flag.needsUpdate = true;
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義11　リサイズ対応
  // ---------------------------------------------------------------------------------------------

  function onResize() {
    // サイズを取得
    const width = window.innerWidth;
    const height = window.innerHeight;

    const break_point_first = 780;
    const break_point_second = 585;

    if (width >= break_point_first) {
      camera.position.z = 260;
    } else if (width < break_point_first & width >= break_point_second) {
      camera.position.z = 360;
    } else {
      camera.position.z = 480;
    }

    // レンダラーのサイズを調整する
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // カメラのアスペクト比を正す
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　関数定義 end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
});