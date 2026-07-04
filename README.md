# yuma-ichikawa.github.io

Yuma Ichikawa (市川佑馬) のプロフェッショナルサイトです。純粋な HTML / CSS / JavaScript のみで構築されており、ビルドツールや依存パッケージは不要です。

公開URL: https://yuma-ichikawa.github.io

## 特徴

- **白ベースのエディトリアルデザイン**(セリフ体見出し + ネイビー/ゴールドのアクセント)
- **日本語 / 英語の切替**(ヘッダー右上のトグル、選択は localStorage に保存)
- **Software 紹介ページ**(`software.html`): OneComp / QQA4CO / StatPhys-ML
- **Publications の年別フィルタ**と各論文の紹介文(日英)
- AI 生成のオリジナルアートワーク(エネルギーランドスケープ、相転移、量子化など研究テーマを表現)

## ディレクトリ構成

```
yuma-ichikawa.github.io/
├── index.html        # トップページ(About / Research / Publications / Software / Talks / Awards / Press / Contact)
├── software.html     # ソフトウェア詳細ページ(OneComp / QQA4CO / StatPhys-ML)
├── css/
│   └── style.css     # 白ベースのエディトリアルデザイン、レスポンシブ対応
├── js/
│   └── main.js       # 言語切替・ナビ・スクロールアニメ・論文年フィルタ
├── assets/
│   └── img/          # 生成アートワーク(hero-landscape.png ほか)
└── README.md
```

## ローカルでのプレビュー

ブラウザで `index.html` を直接開くだけで確認できます。簡易サーバーを使う場合:

```bash
python -m http.server 8000
# → http://localhost:8000 をブラウザで開く
```

## 更新方法

- **論文の追加**: `index.html` の `#publications` セクションに `<article class="pub-item" data-year="YYYY">` を追記。日本語紹介文は `<span class="ja">`, 英語は `<span class="en">` に書く
- **講演・受賞・プレスの追加**: 対応するセクション(`#talks`, `#awards`, `#press`)に `<li>` を追記
- **配色の変更**: `css/style.css` 冒頭の `:root { ... }` のカラー変数(`--ink`, `--gold` など)を変更
- **独自ドメイン**: リポジトリ直下に `CNAME` ファイルを作成しドメイン名を1行記載

push すれば GitHub Pages に自動反映されます(通常1〜3分)。
