# yuma-ichikawa.github.io

Yuma Ichikawa (市川佑馬) の研究者向けプロフェッショナルサイトです。純粋な HTML / CSS / JavaScript のみで構築されており、ビルドツールや依存パッケージは一切不要です。

サイト内容(About / Research Topics / Publications / Talks / Awards / Press / Contact)は [ichikawa-laboratory.com](https://ichikawa-laboratory.com/) の情報をベースに再構成しています。

## 公開手順(GitHub Pages)

1. GitHub 上でユーザー名と**完全に同じ名前**のリポジトリを作成します。

   - リポジトリ名: `yuma-ichikawa.github.io`
   - Public を選択(READMEなどの初期化は不要。既にこのフォルダにファイルがあるため)

2. このフォルダをそのリポジトリに紐づけて push します。

   ```bash
   cd yuma-ichikawa.github.io
   git init
   git add .
   git commit -m "Initial commit: professional profile site"
   git branch -M main
   git remote add origin https://github.com/Yuma-Ichikawa/yuma-ichikawa.github.io.git
   git push -u origin main
   ```

3. 数分待つと `https://yuma-ichikawa.github.io` でサイトが公開されます。
   (ユーザーサイト用リポジトリは GitHub Pages が自動的に有効になります。もし表示されない場合は、リポジトリの
   **Settings → Pages** で Source が `Deploy from a branch` / `main` / `/(root)` になっているか確認してください。)

## ローカルでのプレビュー

ブラウザで `index.html` を直接開くだけで確認できます。ライブリロードしたい場合は VS Code の
"Live Server" 拡張機能や、以下のように簡易サーバーを立てても構いません。

```bash
python -m http.server 8000
# → http://localhost:8000 をブラウザで開く
```

## ディレクトリ構成

```
yuma-ichikawa.github.io/
├── index.html        # ページ本体(全セクション)
├── css/
│   └── style.css     # デザイン(ダーク/ライトテーマ対応、レスポンシブ)
├── js/
│   └── main.js        # テーマ切替・ナビ・スクロールアニメ・論文年フィルタ
├── assets/
│   └── img/            # プロフィール写真などを置く場所
└── README.md
```

## カスタマイズのポイント

- **プロフィール写真を追加する場合**: `assets/img/` に画像を置き、`index.html` の
  `.hero-inner` 内に `<img>` タグを追加してください。
- **配色を変える場合**: `css/style.css` の先頭にある `:root { ... }` 内のカラー変数
  (`--accent`, `--accent-2` など)を変更するだけで全体の配色が変わります。
- **独自ドメインを使う場合**: このフォルダ直下に `CNAME` というファイルを作成し、
  中身に独自ドメイン(例: `ichikawa-laboratory.com`)を1行だけ記載し、
  ドメインの DNS 設定で GitHub Pages を指すようにしてください。
- **論文・講演・受賞歴の更新**: `index.html` 内の該当セクション(`#publications`,
  `#talks`, `#awards`, `#press`)に新しい `<article>` / `<li>` を追記するだけで反映されます。
  Publications セクションの各カードには `data-year` 属性があり、年フィルタのボタンと連動しています。
