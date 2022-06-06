# リポジトリの利用・運用方法について

* 利用する端末には事前にHUGOパッケージをインストールしておく
* git clone 直後は `npm install` などしてNodeパッケージをインストールする

## https://github.com/andaze/HUGO-base との連携について

* `git remote add hugo-base https://github.com/andaze/HUGO-base.git` 
* `git subtree pull --prefix=themes/andaze hugo-base main` or `git subtree push --prefix=themes/andaze hugo-base main` などで通常のリポジトリのように取得・更新が可能

* 基本的にすべてのコミット情報は origin リポジトリにコミットされる

# 経緯・現況

* 既存コーポレートサイトでは言葉で技術力を謳っているが、サイト上での表現力・実装技術が乏しい（と感じている）
* リニューアル後は、ひと目見て技術力が低くないこと（要の技術力に違和感を抱かせないこと）を表現する
* 派手すぎず、見窄らしくない、細部にまで目が届いているコーポレートサイトを目指す
* 制作途中成果物を引き継いだが、それを活かすか破棄するかは検討中
  * 構造自体は引き継ぎ内容等については破棄する方向

- [x] タスク管理を何でするか決まっていない 
    - https://github.com/andaze/WebCorporate/issues を使う
- [x] リポジトリを作っていない・早々に作らないといけない

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

* 多言語コンテンツ・原稿はDeepLを使ってほぼ自動翻訳

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

#### 利用ツールなど

* git client に指定はない
  * が、GitHub Flow に従うので vscode / github extension or github desktop を推奨する
    - https://community.chocolatey.org/packages/github-desktop
    - https://code.visualstudio.com/docs/editor/github

# 実装に関すること
  

## ページ特性

### 全体を通して

* 細部まで洗練された状態（Simple）を目指す
  - ゴージャスである必要はない
  - インタラクションやエフェクトが多ければ多いほど良いとうわけではない
  - 余白に気を遣う

* コンテンツは何らかの規則性に沿って整頓された状態

* スクロール時、上から下への各コンポーネント間でメリハリをつけ、かつ、リズムを損ねない。統一的なスムースさを失わない。

### トップページ

* 参考サイト: https://www.dip-net.co.jp/

* ファーストビューやその周辺は実装技術に凝り、惹きつけ、技術力の高さで他社との差別化をはかることを表現する

### 下層ページ(非トップ)

* 参考サイト: https://www.dip-net.co.jp/
  * https://www.simplex.inc/ はサイト構造の参考とする


* 下層ページは正しい文章で語ることにより **正当性や責任感を表現する**

* 文章や見出しの他、コンテンツに特別な仕掛けがない分ページ全体としての **まとまりや心地よさを重視する**

 
# 工期や工数・工程など(単位: 人日)

* 2022年3月末を1次公開日とする
    - この時点で100点である必要はない
    - 参考サイトと同等のものを実現できていれば良い
    - 4月半ば時点では100点に限りなく近い状態

* 工数は全体で29人日を見込んでいる

## 工程と工数


#### 1. ページ作成: (1 + 4 * 1 + 2) / 6 = 1.2666666666666666
---

1. 原稿からページ・段落・見出しなどを認識しHUGOへ分割・流し込み(HUGOコンテンツ化)
   - markdown へ変換・コピペするということ
   - markdown 作成段階でPATHが確定する

   * 原稿
     - https://andaze-my.sharepoint.com/:w:/p/yofujimaki/EdCpM1pyUuxOqjb20dj4WUoBV93biekye8cGw32jiCBVFg?e=aLjvIN&isSPOFile=1

   * HUGOナレッジ
     - https://gohugo.io/getting-started/directory-structure/
     - https://gohugo.io/content-management/organization/

### 2. コンポーネントの洗い出し・重要度・優先度付: (1 + 4 * 1 + 3) / 6 = 1.3333333333333333333
---

  1. 参考サイトdipを洗い出し対象とする

### 3. コンポーネント作成・実装: (5 + 4 * 7 + 10) / 6 = 7.1666666666666666667
---

1. サイトグローバルなコンポーネントから作り始める
   * 大抵はフッター、ヘッダー、サイドバー
   * コンポーネント粒度は organism, template のいずれかになるだろう
   * ブランチやイシューの粒度もorganism, template のいずれかになるだろう

2. 次にトップページのコンポーネントを作る
   * 他のページにも使われる汎用コンポーネントから（**よりサイトグローバルに近い要素から**）
   * パンくずなどか？

3. 2のようにページ単位で繰り返しコンポーネントを作る・増やす

#### ところで各コンポーネントの作成順

1. ファイル作成
   1. まずは空のコンポーネントファイルを作る
2. レイアウト作成
   1. 配置・位置・大きさなど要素の骨組み
3. スタイル作成
   1. 色・角丸・ライン種などの装飾
4. インタラクション作成
   1. ホバー、クリック時のエフェクトやアニメーション

### 4. 1へ3を適用・結合・統合: (3 + 4 * 4 + 7) / 6 = 4.3333333333333333333
---

### 5. パフォーマンステスト: (1 + 4 * 2 + 4) / 6 = 2.1666666666666666667
---
   1. 機能
      1. 遷移が正しいか
      2. page speed insight スコア

   2. 非機能
      1. SEO
      2. UX

### 6. 全体整合性の調整: (1 + 4 * 1 + 2) / 6 = 1.1666666666666666667
---
   1. ムリ・ムダ・ムラを減らす
      1. リファクタリング
   2. 残された改善点・改良点を洗い出す
      1. リリース前後に対処するかなど優先度をつける
 
# キービジュアル作成のための暫定仕様・指示

## 用語の定義

* エフェクト
  * 静的または動的な素材に対して施す動き・見た目の変更

* インタラクション
  * ユーザ操作をトリガーとしたなにかしらの振る舞いの変化・変更


## アニメーション仕様

- 初期挙動

  - 画面ロード
    - カメラのセット
      - 位置

    - シーンのセット
      - 画面幅、高さ、背景色

    - レンダリング

  - ロゴ画像読み込み（カラー画像）

  - WebGL用にデータ変換

  - メッシュ形状からパーティクルに変換

  - ロゴマーク + 文字（a, n, d, a, z, e）　に分割してマテリアル化

- インタラクション

  - 画面をドラッグ
    - ドラッグされた方向にカメラが移動（OrbitControl）

      - カメラの移動範囲はロゴが正面から見える角度に制限
      （ロゴ後方には回り込めない）

        - 初期位置に移動

    - カメラが画面に近づく

      - 拡大によりロゴが画面外に見切れることはない

        - 初期位置に移動

    - Raycaster起動

      - マテリアルが検出された場合

        - パーティクルが拡散

          - 初期位置に移動

      - マテリアルが検出されない場合

        - イベントなし

  - 画面をクリック

    - イベントなし

  - 画面をスクロール

    - イベントなし


# イシューの運用方針

* イシューの作成は、プロジェクトの完成に不足している課題や疑問点を見つけた時、または機能的なリクエストがある場合などに**個々人が能動的に行う**

* イシューへのアサインは、実装開始時に実装する**個々人が能動的に行う**
  * 自分自身での実装が難しい場合や役割分担している場合などは、任意に適切な作業者をアサインする

* 1つのイシューは**概ね1人の人が1日以内に実装できる粒度**にする
  * 課題を小さく分離し、たくさんのイシューとプルリクでプロジェクトを進める

## イシューの基本的で具体的な作成方法

1. [Home | アンダーズ株式会社](https://andaze.github.io/WebCorporate/) と [ディップ株式会社](https://www.dip-net.co.jp/) の各ページを比較して、**不足しているヴィジュアルパーツ**を見つける

2. 見つけたヴィジュアルパーツをコンポーネントに分割し、[andaze – Figma](https://www.figma.com/file/uDqozBvQAiFg1PqQ9vjwnb/andaze) の図にマッピングする
   1. コンポーネントの粒度はAtomic Design[^1][^2]の考えに基づいたものとする
      * red ... atom
      * yellow ... molecule
      * green ... organism
      * blue ... tempalte
      * ...
   2. コンポーネントの持つ機能や複雑性は多種多様であるため、正確に分割することを目的としない。あくまでも作業者が考えたコンポーネント粒度でマッピングする

3. Figma にマッピングしたコンポーネント図に基づいてイシューを作成する
   1. イシューのタイトルはそのコンポーネントを端的に表すものとする(または、タイトルが思いつかないときはFigma要素のリンクにする)
      * 例: **listed/repeat contetn banners ** , **https://www.figma.com/file/uDqozBvQAiFg1PqQ9vjwnb/andaze?node-id=36%3A107**

4. 作成されたイシューのURLをFigma要素のテキスト欄またはリンク欄に関連づける
   * 例: [このFigma要素](https://www.figma.com/file/uDqozBvQAiFg1PqQ9vjwnb/andaze?node-id=36%3A107)
   * 終わったイシューは罫線を入れるとわかりやすいと思うが必須ではない

## まとめ

* イシューとFigmaを使ってゆるくタスク管理を行う
  * 締切日や作業者などの管理は行わない

---

[^1]: https://atomicdesign.bradfrost.com/chapter-2/#atomic-design-is-for-user-interfaces
[^2]: https://uxdaystokyo.com/articles/glossary/atomic-design/

# Git戦略・運用方法について

* [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) を採用する
