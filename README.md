# エターナルゾーンDB（Unofficial, PWA）

- 匿名公開向けのPWAスターターです（App Store審査・販売元表示なし）。
- `index.html` を GitHub Pages / Netlify / Vercel にデプロイしてください。
- iPhone Safariで開いて「共有」→「ホーム画面に追加」でアプリ化できます。

## 構成
- `index.html` : UI（装備/モンスターのタブ、検索）
- `data/items.json`, `data/monsters.json` : サンプルデータ
- `manifest.json` : PWAマニフェスト
- `sw.js` : オフラインキャッシュ
- `icons/` : アプリアイコン

## デプロイ（GitHub Pagesの例）
1. 新規リポジトリを作成（公開/パブリック推奨）
2. このフォルダの中身をアップロード
3. Settings → Pages → Deploy from a branch → `main` / `/ (root)` を選択
4. 生成されたURLをiPhoneで開き「ホーム画面に追加」

## データ更新
- `data/*.json` を差し替えれば即反映。オフライン用キャッシュ更新にはリロードが必要です。

## 表示上の注意
- 公式ではありません（非公式ファンメイド）。
- 画像/素材の権利に注意してください（このスターターには独自アイコンのみ含みます）。
