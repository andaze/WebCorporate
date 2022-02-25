# 本ドキュメントは最終的にリポジトリ内のREADME.md と結合される予定

# 経緯・現況

* 既存コーポレートサイトでは言葉で技術力を謳っているが、サイト上での表現力・実装技術が乏しい（と感じている）
* リニューアル後は、ひと目見て技術力が低くないこと（要の技術力に違和感を抱かせないこと）を表現する
* 派手すぎず、見窄らしくない、細部にまで目が届いているコーポレートサイトを目指す
* 制作途中成果物を引き継いだが、それを活かすか破棄するかは検討中
  * 構造自体は引き継ぎ内容等については破棄する方向

- [ ] タスク管理を何でするか決まっていない
- [ ] リポジトリを作っていない・早々に作らないといけない

# 要件

#### 機能・技術的

* サイトの制作・管理・更新はすべてGitを介して行う（記事コンテンツなども）
* サイトの公開方法はNetlifyなど外部サービスを用いる
* サイト・コンテンツ管理には [The world’s fastest framework for building websites | Hugo](https://gohugo.io/) を用いる
* スタイルフレームワークとして [Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/) を採用する
- 既存のものは削除・置き換える
* キービジュアルは [Three.js – JavaScript 3D Library](https://threejs.org/) を用いる
* [PageSpeed Insights](https://pagespeed.web.dev/) の評価は常にグリーンを維持する
    - 評価と実装したビジュアル表現（アセットサイズが大きい・リッチ表現・遅延など）でトレード・オフな関係にある場合は、**評価を優先する**
* 多言語サイト（日本語・英語）である

#### 非機能

* ヴィジュアルデザイン・カンプベースでの構築ではないので、迷った場合は誰かに相談する
- ヴィジュアルは参考サイトを基準にする
- 動いているサイトを正として改善し続ける

* URL/PATHなどのサイト構造は論理的に正しく生成する
    - パンくずの階層構造とURLの階層構造が一致している
    - ページのコンテンツ内容をPATHが的確に表現している
    - PATHは英単語で構成されている（ヘボン式ローマ字は却下）

* コンポーネント志向で開発する
    - 粒度定義はアトミックデザインをベースに考えている
      - https://uxdaystokyo.com/articles/glossary/atomic-design/
      - 各コンポーネントはそれを内包するコンポーネントおよび外部のコンポーネントに極力影響を与えないように実装する
    - ヴィジュアル・スタイルが**同じ場合は実装コードもなるだけ統一する**
-見えるものも大切で見えないものも大切である

* ユーザが該当のページに辿り着いたときに十分に情報を表示する
    - ヤフーのようなインデックス型ポータルに慣れた人を想定してほしい
    - WEBサイト見たお客さんに情報を抜けもれなく伝えたい故に文章量が多くなりがち

##### 素材・ロゴについて

* 使いやすいように・見やすくなるのであれば**改変してよい**

* より良い見た目になるのであればウェブフォントなどで**代替してもよい**

## ページ特性

### 全体を通して

* 細部まで洗練された状態（Simple）を目指す
  - ゴージャスである必要はない
  - インタラクションやエフェクトが多ければ多いほど良いとうわけではない
  - 余白に気を遣う
- コンテンツは何らかの規則性に沿って整頓された状態
- スクロール時、上から下への各コンポーネント間でメリハリをつけ、かつリズムを損ねない。スムースさを失わない。

### トップページ

* 参考サイト: https://www.dip-net.co.jp/

* ファーストビューやその周辺は実装技術に凝り、惹きつけ、技術力の高さで他社との差別化をはかることを表現する

### 下層ページ(非トップ)

* 参考サイト: https://www.simplex.inc/


* 下層ページは正しい文章で語ることにより **正当性や責任感を表現する**

* 文章や見出しの他、コンテンツに特別な仕掛けがない分ページ全体としての **まとまりや心地よさを重視する**

 
# 工期や工数・工程など

* 2022年3月末を1次公開日とする
    - この時点で100点である必要はない
    - 参考サイトと同等のものを実現できていれば良い
    - 4月半ば時点では100点に限りなく近い状態

* 工数は全体で29人日を見込んでいる

## 工程と工数

#### 1. ページ作成: (1 + 4 * 1 + 2) / 6 = 1.26666666666666667

1. 原稿からページ・段落・見出しなどを認識しHUGOへ分割・流し込み(HUGOコンテンツ化)
- markdown へ変換・コピペするということ
- markdown 作成段階でPATHが確定する

* 原稿
- https://andaze-my.sharepoint.com/:w:/p/yofujimaki/EdCpM1pyUuxOqjb20dj4WUoBV93biekye8cGw32jiCBVFg?e=aLjvIN&isSPOFile=1

* HUGOナレッジ
  - https://gohugo.io/getting-started/directory-structure/
  - https://gohugo.io/content-management/organization/

* git hub client
- https://community.chocolatey.org/packages/github-desktop
- https://github.com/andaze/WebCorporate

* 具体的にやること
1.	Git で main から create-contetns ブランチを作る
2.	Pushする
3.	

2. コンポーネントの洗い出し・重要度・優先度付: (1 + 4 * 1 + 3) / 6 = 1.3333333333333333333

  1. 参考サイトhttps://www.simplex.inc /を洗い出し対象とする

3. コンポーネント作成・実装: (5 + 4 * 7 + 10) / 6 = 7.1666666666666666667

   1. レイアウト作成
   2. スタイル作成
   3. インタラクション作成

4. 1へ3を適用・結合・統合: (3 + 4 * 4 + 7) / 6 = 4.3333333333333333333

5. パフォーマンステスト: (1 + 4 * 2 + 4) / 6 = 2.1666666666666666667

   1. 機能
      1. 遷移が正しいか
      2. page speed insight スコア

   2. 非機能
      1. SEO
      2. UX

6. 全体整合性の調整: (1 + 4 * 1 + 2) / 6 = 1.1666666666666666667
****
   1. ムリ・ムダ・ムラを減らす
      1. リファクタリング
   2. 残された改善点・改良点を洗い出す
      1. リリース前後に対処するかなど優先度をつける
 
# 以下、キービジュアル作成のための暫定仕様・指示

# 用語の定義

* エフェクト
  * 静的または動的な素材に対して施す動き・見た目の変更

* インタラクション
  * ユーザ操作をトリガーとしたなにかしらの振る舞いの変化・変更

# 以下メモ、工数計算などなど


* シーン

* カメラ
  * OrbitControls.js

* テクスチャはナシ


## アニメーション仕様

-初期挙動

  -画面ロード
    -カメラのセット
      -位置

    -シーンのセット
      -画面幅、高さ、背景色

    -レンダリング

  -ロゴ画像読み込み（カラー画像）

  -WebGL用にデータ変換

  -メッシュ形状からパーティクルに変換

  -ロゴマーク + 文字（a, n, d, a, z, e）　に分割してマテリアル化

-インタラクション

  -画面をドラッグ
    -ドラッグされた方向にカメラが移動（OrbitControl）

      -カメラの移動範囲はロゴが正面から見える角度に制限
      （ロゴ後方には回り込めない）

        -初期位置に移動

    -カメラが画面に近づく

      -拡大によりロゴが画面外に見切れることはない

        -初期位置に移動

    -Raycaster起動

      -マテリアルが検出された場合

        -パーティクルが拡散

          -初期位置に移動

      -マテリアルが検出されない場合

        -イベントなし

  -画面をクリック

    -イベントなし

  -画面をスクロール

    -イベントなし
