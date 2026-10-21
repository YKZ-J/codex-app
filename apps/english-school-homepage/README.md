# Ohana英会話ホームページ

[参照サイト](https://ohanaeikaiwa.crayon1.com/)の見た目をもとに、React・TypeScript・Tailwind CSSで作成した独立アプリです。

ルートから実行します。

```sh
pnpm --filter english-school-homepage dev
pnpm --filter english-school-homepage lint
pnpm --filter english-school-homepage test
pnpm --filter english-school-homepage build
```

開発URLは http://localhost:5174 、ビルド出力先は`apps/english-school-homepage/dist/`です。ルートの`pnpm lint`・`pnpm test`・`pnpm build`にも含まれます。

## 構成

- `src/App.tsx`: ページ・スマートフォン用の開閉メニュー
- `src/PhotoSlideshow.tsx`: 4枚のスライダー（5秒間隔、手動選択、停止・再開）
- `src/content.ts`: 参照サイトの画像URL・リンク
- `src/index.css`: Tailwind CSS・レスポンシブスタイル
- `src/App.test.tsx`: 表示・写真操作・自動再生・モーション軽減・メニュー操作のテスト

参照サイトのPC表示と公開HTMLから、幅850pxの中央配置、葉柄のヘッダー、左メニュー、本文の水色の枠と区切り線を再現しています。本文は一部要約・調整しています。

画像は参照サイトの公開画像URLを直接参照するため、画像の表示にはネットワーク接続が必要です。ページ全体の保存はブラウザー側で実行できず、ローカル画像の同梱は行っていません。講師紹介・日程と料金は参照サイトの各ページにリンクしています。広告・計測スクリプトは追加していません。

自動再生はマウス操作中・フォーカス中に一時停止し、写真を手動選択すると停止します。OSのモーション軽減設定が有効な場合、自動再生は初期停止します。

## 動作確認

開発サーバーの起動は、この環境ではポート待ち受けが`EPERM`で拒否されます。代わりにビルドしたCSS・JavaScriptを一時HTMLにまとめ、ChromeでPC表示・幅390pxの表示とメニュー開閉、写真操作を確認しています。通常の開発サーバーでの配信確認は未完了です。
