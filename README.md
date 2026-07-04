# yuma-ichikawa.github.io

Yuma Ichikawa (市川佑馬) のプロフェッショナルサイト. 純粋な HTML / CSS / JavaScript のみで構築. ビルドツール・依存パッケージ不要.

公開URL: https://yuma-ichikawa.github.io

## 構成

```
├── index.html        # トップ (About / Research / Publications / Software / Talks / Awards / Press / Contact)
├── software.html     # ソフトウェア詳細 (OneComp / QQA4CO / StatPhys-ML)
├── css/style.css     # 白ベースのエディトリアルデザイン
├── js/main.js        # 日英切替・ナビ・スクロールアニメ・年フィルタ
└── assets/img/       # アートワーク・概念図 (SVG)
```

## プレビュー

```bash
python -m http.server 8000
```

## 更新

- 論文追加: `index.html` の `#publications` に `<article class="pub-item" data-year="YYYY">` を追記. 日本語は `<span class="ja">`, 英語は `<span class="en">`
- 講演・受賞・プレス: 対応セクションに `<li>` を追記
- 配色: `css/style.css` 冒頭の `:root` 変数を変更

push すれば GitHub Pages に自動反映 (通常1〜3分).
