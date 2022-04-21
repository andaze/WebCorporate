const loading_icon = document.getElementById("loading_icon");
window.setTimeout(() => {
  loading_icon.style.visibility = "visible";
}, 1)


// ---------------------------------------------------------------------------------------------
//　3D空間のセットアップ・オブジェクトの生成
// ---------------------------------------------------------------------------------------------

// シーンの作成
var scene = new THREE.Scene();

// カメラの作成
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// カメラ位置設定
camera.position.z = 400;
camera.position.x = 0;
camera.position.y = 30;


// レンダラーの作成
var renderer = new THREE.WebGLRenderer();

// ヘッダーの高さ
const header_height = document.getElementById("header_nav").clientHeight;
const bar_width = 17;


// トップページmainタグの高さを取得してfooterのmargin-topに設定
const main_height = document.getElementById("top_main").clientHeight;
document.querySelector("footer").style.marginTop = main_height + "px";

// canvasのmargin-topにheaderの高さを設定
const canvas = document.getElementById('webgl');
canvas.style.marginTop = header_height + "px";

if (typeof window.ontouchstart === "undefined") {
  renderer.setSize( window.innerWidth - bar_width, window.innerHeight -  header_height);
} else {
  renderer.setSize( window.innerWidth, window.innerHeight -  header_height);
}


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
      u_value: { type: "f", value: 0.0 },
      pointTexture: { value: new THREE.TextureLoader().load( '../img/spark.png' ) }
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthTest: false
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

  // パーティクルの座標配列
  const particlePositions = mesh.geometry.attributes.position.array;

  // パーティクルの移動許可フラグの配列
  const particleFlag = mesh.geometry.attributes.flag.array;


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
  var click_frag = false;
  
  // オブジェクト移動許可フラグ
  var moving_flag = false;

  // スライドフラグ
  var slide_flag = false;

  // raycaster検知フラグ
  var detection = false;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　変数定義 end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // オブジェクトをシーンに追加
  scene.add( mesh );


  // オブジェクトを配列（raycaster用）に追加
  objects.push( mesh );


  // 画面が読み込まれた後にフェードイン開始
  window.setTimeout(() => {

    // ロード画面を非表示
    const spinner = document.getElementById('loading');
    spinner.style.opacity = 0;
    spinner.style.visibility = "hidden";

    // // フェードイン実行（FadeIn関数）
    FadeIn(fadein_times-1, interval_time);
  
    // フラグ反転
    window.setTimeout(reverse_click_flag, fadein_times*interval_time);
    window.setTimeout(reverse_moving_flag, fadein_times*interval_time);
  }, 500);


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


  // コンテンツ位置までスクロールしたら暗くする
  const dark_cover = document.getElementById('hidden_cover')
  const key_visual = document.getElementById("key-visual");
  const key_visual_bottom = key_visual.getBoundingClientRect().bottom + window.pageYOffset;
  const target_static = key_visual_bottom - (window.innerHeight * 0.88)

  window.addEventListener('scroll', () => {
    blackOut()
  });


  // アニメーションの実行（animate関数）
  animate();


  // 初期化のために実行
  onResize();

  // リサイズイベント発生時に実行
  window.addEventListener('resize', onResize);


  // ---------------------------------------------------------------------------------------------
  //　インタラクションガイド
  // ---------------------------------------------------------------------------------------------

  const nav_block = document.getElementById("nav_block");
  const anime_nav = document.getElementById("anime_nav");
  const hand = document.getElementById("hand");
  const circle = document.getElementById("circle");
  const animation_nav = gsap.timeline();
  const animation_nav_sub = gsap.timeline();

  animation_nav
  .to(hand, {
    duration: 0.5, // 右側に2秒かけて移動するモーションを指定する
    y: 10,
    opacity: 1,
  })
  .to(hand, {
    duration: 0.3, // 右側に2秒かけて移動するモーションを指定する
    x:  (anime_nav.clientWidth - hand.clientWidth)*0.8,
    opacity: 0.6,
  })
  .to(hand, {
    duration: 0.5, // 右側に2秒かけて移動するモーションを指定する
    x:  anime_nav.clientWidth - hand.clientWidth,
    y: -10,
    opacity: 0,
  })

  animation_nav_sub
  .to(circle, {
    duration: 0.5, // 右側に2秒かけて移動するモーションを指定する
    y: 10,
  })
  .set(circle, {
    opacity: .7,
  })
  .to(circle, {
    duration: 0.3, // 右側に2秒かけて移動するモーションを指定する
    x:  (anime_nav.clientWidth - hand.clientWidth)*0.8,
  })
  .set(circle, {
    opacity: 0,
  })
  .to(circle, {
    duration: 0.5, // 右側に2秒かけて移動するモーションを指定する
    x:  anime_nav.clientWidth - hand.clientWidth,
    y: -10,
  })

  animation_nav.repeat(-1);
  animation_nav_sub.repeat(-1);

  window.setTimeout(() => {
    if (slide_flag === false) {
      nav_block.style.opacity = 1;
      nav_block.style.visibility = "visible";
    }
  }, fadein_times*interval_time+5000)



  // ロードから一定時間経過後、自動でパーティクルを拡散
  window.setTimeout(() => {
    window.setInterval(autoDiffusion, 1000)
  }, fadein_times*interval_time+5000 + (randomNumbers(10, 5)*1000))
  


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
        if (a > 0) {
          position.push(pX, pY, pZ), color.push(r, g, b), alpha.push(a);
        }
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
  // 関数定義4 フェードインアニメーション実行
  // ---------------------------------------------------------------------------------------------

  function FadeIn(sampling_time, interval_time) {
    PreProcessing(sampling_time);
    PostProcessing(sampling_time + 1, interval_time);
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
  // 関数定義6 オブジェクト移動フラグの反転
  // ---------------------------------------------------------------------------------------------

  function reverse_moving_flag() {
    if (moving_flag === false) {
      moving_flag = true;
    } else if (moving_flag === true) {
      moving_flag = false;
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

    // マウスを押し込んだ位置の座標を記憶（PC）
    pushed_pos.x = event.clientX - (window.innerWidth / 2);
    pushed_pos.y = - (event.clientY - (window.innerHeight / 2)) + header_height + camera.position.y;
    
    // raycaster用マウス座標取得
    mouse_pos.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse_pos.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    // タップした位置の座標を記憶（スマホ）
    if (typeof window.ontouchstart != "undefined") {
      pushed_pos.x = event.changedTouches[0].pageX - (window.innerWidth / 2);
      pushed_pos.y = - (event.changedTouches[0].pageY - (window.innerHeight / 2)) + header_height + camera.position.y;

        // raycaster用マウス座標取得
      mouse_pos.x = ( event.changedTouches[0].pageX / window.innerWidth ) * 2 - 1;
      mouse_pos.y = - ( event.changedTouches[0].pageY / window.innerHeight ) * 2 + 1;
    }

    // raycasterセット
    raycaster.setFromCamera( mouse_pos, camera );

    // raycasterがオブジェクトと接触しているか検知
    var intersects = raycaster.intersectObjects( objects );

    // raycasterがオブジェクトと接触していれば以降の処理を行う
    if ( intersects.length > 0 ) {

      event.preventDefault();

      // raycaster検知フラグ反転
      detection = true;
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

    // raycasterがオブジェクトを検知していれば以降の処理を行う
    if (detection === true) {
      event.preventDefault();
    }

    // マウスを放した位置の座標を記憶（PC）
    released_pos.x = event.clientX - (window.innerWidth / 2);
    released_pos.y = - (event.clientY - (window.innerHeight / 2)) + header_height + camera.position.y;

    // タップを放したした位置の座標を記憶（スマホ）
    if (typeof window.ontouchstart != "undefined") {
      released_pos.x = event.changedTouches[0].pageX - (window.innerWidth / 2);
      released_pos.y = - (event.changedTouches[0].pageY - (window.innerHeight / 2)) + header_height + camera.position.y;
    }

    // マウスを押し込んでスライドした距離
    slide_distance.x = released_pos.x - pushed_pos.x;
    slide_distance.y = released_pos.y - pushed_pos.y;
    slide_distance_abs.x = Math.abs(slide_distance.x);
    slide_distance_abs.y = Math.abs(slide_distance.y);

    if (click_frag==true) {
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

            diffusion.start();

            // インタラクションガイドを非表示
            nav_block.style.opacity = 0;
            nav_block.style.visibility = "hidden";

            // スライド可否フラグ反転
            slide_flag = true;

            if (moving_flag === true) {
              mesh_move.start();
              reverse_moving_flag();
              window.setTimeout(reverse_moving_flag, slide_time*100000*2 + 4000)
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

    // raycaster検知フラグをリセット
    detection = false;
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義10 Three.jsのアニメーション関数
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

    // ブレイクポイントの設定
    const break_point_1 = 3840;
    const break_point_2 = 2560;
    const break_point_3 = 1920;
    const break_point_4 = 1440;
    const break_point_5 = 1280;
    const break_point_6 = 840;
    const break_point_7 = 650;
    const break_point_8 = 370;

    // デバイスがPCかスマホか判別し処理を分ける
    if (typeof window.ontouchstart === "undefined") {
      if (width >= break_point_1) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 13;
      } else if (width < break_point_1 & width >= break_point_2) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 8;
      } else if (width < break_point_2 & width >= break_point_3) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 3;
      } else if (width < break_point_3 & width >= break_point_4) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 1;
      } else if (width < break_point_4 & width >= break_point_5) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 0;
      } else if (width < break_point_5 & width >= break_point_6) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 0;
      } else if (width < break_point_6 & width >= break_point_7) {
        camera.position.z = 480;
        mesh.material.uniforms.u_value.value = -1;
      } else if (width < break_point_7 & width >= break_point_8) {
        camera.position.z = 880;
        mesh.material.uniforms.u_value.value = -6;
      } else {
        camera.position.z = 800;
        mesh.material.uniforms.u_value.value = -6;
      }
    } else {
      if (width >= break_point_1) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 13;
      } else if (width < break_point_1 & width >= break_point_2) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 6;
      } else if (width < break_point_2 & width >= break_point_3) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 4;
      } else if (width < break_point_3 & width >= break_point_4) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 1;
      } else if (width < break_point_4 & width >= break_point_5) {
        camera.position.z = 400;
        mesh.material.uniforms.u_value.value = 0;
      } else if (width < break_point_5 & width >= break_point_6) {
        camera.position.z = 600;
        mesh.material.uniforms.u_value.value = 0;
      } else if (width < break_point_6 & width >= break_point_7) {
        camera.position.z = 600;
        mesh.material.uniforms.u_value.value = 1;
      } else if (width < break_point_7 & width >= break_point_8) {
        camera.position.z = 880;
        mesh.material.uniforms.u_value.value = -6;
      } else {
        camera.position.z = 800;
        mesh.material.uniforms.u_value.value = -6;
      }
    }
    

    // レンダラーのサイズを調整する
    if (typeof window.ontouchstart === "undefined") {
      renderer.setSize(width - bar_width, height -  header_height);
    } else {
      renderer.setSize(width, height -  header_height);
    }

    // カメラのアスペクト比を正す
    camera.aspect = width / (height -  header_height);
    camera.updateProjectionMatrix();

    blackOut();

  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義12　キービジュアルのブラックアウト
  // ---------------------------------------------------------------------------------------------

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
  // 関数定義13　パーティクルの自動アニメーション
  // ---------------------------------------------------------------------------------------------

  function autoDiffusion() {

    random_numbers = randomNumbers(200, 50);
    var direction_coefs = [[Math.random(), Math.random()], [-1 * Math.random(), Math.random()], [Math.random(), -1 * Math.random()], [-1* Math.random(), -1 * Math.random()]]
    var direction_coef = direction_coefs[Math.floor(Math.random() * direction_coefs.length)];
    var direction_coef_first = random_numbers * direction_coef[0];
    var direction_coef_second = random_numbers * direction_coef[1];


    // ランダム値作成（パーティクルが存在する座標範囲内）
    pos_range_plus.x = randomNumbers(375, 0);
    pos_range_minus.x = -1 * randomNumbers(400, 0);
    pos_range_plus.y = randomNumbers(410, 0);
    pos_range_minus.y = -1 * randomNumbers(230, 0);

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
    
    
    if (click_frag==true) {
      for (let i = 0; i < vertces; i++) {
        
        // パーティクルの座標
        var x = attribute.getX(i)*(500/camera.position.z) - 8;
        var y = attribute.getY(i)*(500/camera.position.z) + 8;
        
        var vertex_position = {x: attribute.getX(i), y: attribute.getY(i), z: particleFlag[i]};
        

        // ランダム座標からパーティクルまでの距離
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

            auto_diffusion.start();

            slide_flag = true;

            if (moving_flag === true & mesh.position.z + (2000 / (random_slide_time*500)) <= (camera.position.z * 0.3)) {
              auto_move.start();
              reverse_moving_flag();
              window.setTimeout(reverse_moving_flag, 12000*2)
            }
          }
        }
        
      }
    }
  }


  // ---------------------------------------------------------------------------------------------
  // 関数定義14　乱数生成
  // ---------------------------------------------------------------------------------------------

  function randomNumbers(max, min) {

    // 整数の乱数を生成する
    return Math.floor( Math.random() * max + 1 - min ) + min;

  }
  

  // ---------------------------------------------------------------------------------------------
  // 関数定義15　正負の符号決定
  // ---------------------------------------------------------------------------------------------

  function plusMinus() {

    var plus_and_minus = [1, -1];

    return plus_and_minus[Math.floor(Math.random() * plus_and_minus.length)];

  }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//　関数定義 end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
});

