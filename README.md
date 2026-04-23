# TOMA Corporate Site

株式会社TOMAのコーポレートサイト。静的HTML/CSS/JSで構築、GitHub Pagesでホスティング。

## 構成

```
toma-site/
├── index.html       # トップページ
├── about.html       # 会社概要
├── business.html    # 事業内容
├── contact.html     # お問い合わせ
├── css/style.css    # スタイル
├── js/main.js       # インタラクション
├── CNAME            # カスタムドメイン設定
└── .nojekyll        # Jekyll無効化
```

## デプロイ手順

### 1. GitHubリポジトリ作成

1. GitHub にログイン → New repository
2. リポジトリ名: `toma-site` (または任意)
3. Public に設定(GitHub Pages 無料プランではPublic必須)
4. Create repository

### 2. ファイルをアップロード

ターミナルから:

```bash
cd toma-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/toma-site.git
git push -u origin main
```

もしくはGitHubのWeb UIから "Add file → Upload files" でドラッグ&ドロップでもOK。

### 3. GitHub Pages 有効化

1. リポジトリの **Settings → Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` / `/ (root)` → Save
4. 数分後、`https://YOUR_USERNAME.github.io/toma-site/` でアクセス可能に

### 4. カスタムドメイン設定

#### Settings → Pages での設定

1. "Custom domain" に `toma.asia` を入力 → Save
2. DNS検証後、"Enforce HTTPS" にチェック

#### DNS設定(お名前.com等)

現在のレコードを以下に変更:

**toma.asia (Apex)** - Aレコード4つ追加:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**www.toma.asia** - CNAMEレコード:
```
YOUR_USERNAME.github.io
```

※ 現在の `wildcard.figma.net.cdn.cloudflare.net` のCNAMEを削除してから追加。
※ URL転送設定も削除。

DNS反映には最大24時間かかる場合あり。

### 5. Formspree 設定(お問い合わせフォーム)

1. [formspree.io](https://formspree.io/) で無料アカウント作成
2. 新規フォーム作成 → フォームIDを取得(例: `xyzabcde`)
3. `contact.html` の以下を編集:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

↓

```html
<form class="contact-form" action="https://formspree.io/f/xyzabcde" method="POST">
```

4. 変更をコミット & プッシュ

無料プランは月50件まで。指定したメールアドレスに通知が届きます。

## ローカル確認

Python 3 があれば:

```bash
cd toma-site
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` にアクセス。

## 注意事項

- `CNAME` ファイルはドメイン設定用なので削除しない
- `.nojekyll` はGitHub Pagesの自動処理を無効化するため必要
- DNS切り替え前に、Figma Sites側は残しておくと安全(切り戻し可能)
