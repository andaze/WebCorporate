self.addEventListener('message', (event) => {
  console.log('Worker received message:', event.data);  // 受信メッセージのログ出力
  const { type } = event.data;

  if (type === 'initImageData') {
    const { imageData, width, height, ratio } = event.data;
    const processedImageData = ImagePixel(imageData, width, height, ratio);
    self.postMessage({ type: 'imageData', imageData: processedImageData });
    console.log('Worker sent message:', { type: 'imageData', imageData: processedImageData });  // 送信メッセージのログ出力
  }

  if (type === 'generateData') {
    const vertces = event.data.vertces;

    const rand = [];
    const flag = [];
    for (let i = 0; i < vertces; i++) {
      rand.push((Math.random() - 1.0) * 2.0, (Math.random() - 1.0) * 2.0);
      flag.push(1);
    }

    // 生成したデータをメインスクリプトに返す
    self.postMessage({
      type: 'generatedData',
      rand: rand,
      flag: flag
    });
  }
});


function ImagePixel(imageData, w, h, ratio) {
  const offscreenCanvas = new OffscreenCanvas(w, h);
  const ctx = offscreenCanvas.getContext('2d');

  // 画像データを OffscreenCanvas に描画
  ctx.putImageData(imageData, 0, 0);
  const canvas_width = w;
  const canvas_height = h;

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

      // webgl は原点が中心となり、x は右がプラス左がマイナス。y は上がプラス下がマイナス。
      const pX = x - canvas_width / 2;
      const pY = -(y - canvas_height / 2);
      const pZ = 0;

      const r = data[index + 0] / 255;
      const g = data[index + 1] / 255;
      const b = data[index + 2] / 255;

      // webgl では透明度を 0~1 の範囲で表現するので、255 で割って数値を 0~1 の範囲に変換
      const a = data[index + 3] / 255;

      // 座標、色、透明度の値を配列に追加
      if (a > 0.5) {
        position.push(pX, pY, pZ);
        color.push(r, g, b);
        alpha.push(a);
      }
    }
  }

  return { position: position, color: color, alpha: alpha };
}