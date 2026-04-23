# 合同会社TOMA Corporate Site

Static HTML/CSS/JS corporate website for 合同会社TOMA, hosted on GitHub Pages.

## Structure (Flat)

All files are at the root level for easy drag-and-drop upload to GitHub:

```
index.html       - Home
about.html       - 会社概要
business.html    - 事業内容
contact.html     - お問い合わせ
style.css        - Styles
main.js          - Interactions
CNAME            - Custom domain (toma.asia)
.nojekyll        - Disable Jekyll processing
```

## Design

- **Colors**: Ivory (#f6f2e9) × Deep Navy (#1a2340) × Antique Gold (#a88a5c)
- **Fonts**: Cormorant Garamond (display) + Noto Serif JP (body) + Inter (micro)
- **Approach**: Editorial luxury, generous whitespace, refined typography

## Deployment

1. Upload all files to GitHub repo root
2. Settings → Pages → Branch: main → /(root)
3. Custom domain: `toma.asia`
4. DNS:
   - Apex `toma.asia` → A records: 185.199.108-111.153
   - `www` → CNAME: YOUR_USERNAME.github.io
5. Enable HTTPS once DNS propagates

## Formspree Setup

In `contact.html`, replace `YOUR_FORM_ID` with your actual Formspree ID:

```html
<form action="https://formspree.io/f/xxxxxxxx" method="POST">
```
