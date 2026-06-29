プロンプト用：研修の学習内容・利用可能な技術要件まとめ

最終課題のアプリケーション作成においては、以下の「学習済みの技術・構文」を組み合わせて実装してください。これらは本研修で取り扱った範囲であり、この範囲内の技術を駆使して要件を満たすコードを生成・記述すること。

1. TypeScript 基礎構文・データ操作
- 変数と定数: let（変数）、const（定数）、およびブロックスコープの理解。
- データ型と型注釈: number, string, boolean, null, undefined。
- 高度な型表現: ユニオン型（例: "A" | "B"）、Record<キーの型, 値の型>、型アサーション（as）。
- 演算と変換: 四則演算、剰余（%）、バッククォートと${}を用いた文字列埋め込み、Number()とtoString()による型変換。
- 制御構文: if, else if, else による条件分岐。
- 繰り返し処理: for文、while文、for...of文。
- 配列・オブジェクト操作: 配列（[]）の宣言とインデックスアクセス、length取得、push()（追加）、splice()（抽出・削除）、Object.entries()による反復処理。

2. 関数と構造化（アーキテクチャ）
- 関数の定義: 通常の関数宣言（function）、関数式（無名関数）、アロー関数（() => {}）。
- 関数の型と引数: 引数と戻り値（return）への型注釈（void含む）。
- モジュール化: export と import を用いた複数ファイルへの処理の分割と読み込み。
- クラス（オブジェクト指向基礎）:
  - クラス定義（class）、フィールド（プロパティ）、メソッドの作成。
  - constructor を用いた初期化。
  - this キーワードを用いた自身のインスタンスへのアクセス。
  - アクセス修飾子（public, private）を用いたカプセル化。
  - new キーワードによるインスタンス（実体）の生成。

3. UI構築（HTML / Tailwind CSS）
- HTMLの基本タグ: h1〜h6（見出し）, p（段落）, div（グループ化）, ul/ol/li（リスト）, img（画像）, a（リンク）, input（入力欄）, button（ボタン）。
- Tailwind CSSによるユーティリティクラス装飾:
  - 文字・背景色（text-blue-500, bg-gray-100 など）。
  - サイズと形状（文字サイズ text-xl、角丸 rounded-lg、完全な円 rounded-full、影 shadow-sm）。
  - 余白（内側 p-, 外側 m- および px, my などの軸・方向指定）。
  - ステート変化（ホバー時 hover:、フォーカス時 focus:、クリック時 active:）。
  - ※横並び等の基本配置（資料内で登場した mx-auto, inline-flex, items-center 等の利用）。

4. 動的要素とDOM操作（TypeScript ⇔ HTML）
- DOM要素の取得: getElementById, querySelector, getElementsByClassName, getElementsByTagName, querySelectorAll。
- イベントのハンドリング: addEventListener を用いた、ユーザー操作（click 等）をトリガーとする関数の実行。
- 要素の書き換え: textContent を用いたテキストの変更、style を用いたスタイルの直接変更。
- 要素の追加と削除: createElement による新規タグ作成、appendChild によるDOMツリーへの追加、remove による要素の削除。

5. 実践的な組み込みロジック
- 乱数処理: 組み込みオブジェクト Math.random() と Math.floor() を組み合わせた、配列要素のランダム抽出ロジック。

【禁止事項】本研修の範囲外（以下の使用・出力は避けること）
- ReactやVueなどのフロントエンドフレームワーク・ライブラリの利用。
- flex や grid などの高度で複雑なCSSレイアウトのゼロからの構築。
- クラスの継承（extends）などの高度なオブジェクト指向機能。
- 外部状態管理ライブラリなどを用いた複雑なステート管理。
- npmパッケージなどの外部ライブラリへの依存（開発環境用のVite・Tailwindを除く）。
- ポップアップ（alert等を用いたもの）の表示。