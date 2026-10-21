# Ohana英会話ホームページ

[Ohana英会話](https://ohanaeikaiwa.crayon1.com/)をもとにした既存の文章・写真を保持し、[神田外語キッズクラブ](https://kidsclub.co.jp/)の白・緑の配色とレイアウトを参考にデザインした、React・TypeScript・Tailwind CSSの独立アプリです。

ルートから実行します。

```sh
pnpm --filter english-school-homepage dev
pnpm --filter english-school-homepage lint
pnpm --filter english-school-homepage test
pnpm --filter english-school-homepage build
```

開発URLは http://localhost:5174 、ビルド出力先は`apps/english-school-homepage/dist/`です。ルートの`pnpm lint`・`pnpm test`・`pnpm build`にも含まれます。

## 構成

- `src/App.tsx`: 各ページの選択・共通ヘッダー／フッター・開閉メニュー
- `src/HomePage.tsx`: 既存のホームページ
- `src/TeachersPage.tsx`: 講師紹介
- `src/LessonsPage.tsx`・`src/lessonContent.ts`: レッスン・日程・料金・教室情報
- `src/PhotoSlideshow.tsx`: 4枚のスライダー（5秒間隔、手動選択、停止・再開）
- `src/content.ts`: 参照サイトの画像URL・リンク
- `src/index.css`: Tailwind CSS・レスポンシブスタイル
- `src/App.test.tsx`: 表示・写真操作・自動再生・モーション軽減・メニュー操作のテスト

白い横型ヘッダー、緑のメニューボタン、大きな写真と見出し、余白を広く取った本文、丸みのあるボタンとイベント枠で構成しています。スマートフォンでは縦配置に切り替わります。ロゴはヘッダーに、既存の葉柄背景はフッターに配置しています。

今回のデザイン変更で文章・写真・リンク先は変更していません。変更前後のレンダリング結果を比較し、全テキストノード、画像URL・代替テキスト、背景画像URL、リンク先が保持されていることを確認しています。

画像は参照サイトの公開画像URLを直接参照するため、画像の表示にはネットワーク接続が必要です。ページ全体の保存はブラウザー側で実行できず、ローカル画像の同梱は行っていません。講師紹介・日程と料金は、このアプリ内の各ページにリンクしています。広告・計測スクリプトは追加していません。

自動再生はマウス操作中・フォーカス中に一時停止し、写真を手動選択すると停止します。OSのモーション軽減設定が有効な場合、自動再生は初期停止します。

## 動作確認

開発サーバーの起動は、この環境ではポート待ち受けが`EPERM`で拒否されます。代わりにビルドしたCSS・JavaScriptを一時HTMLにまとめ、ChromeでPC表示・幅390pxの表示とメニュー開閉、写真操作を確認しています。通常の開発サーバーでの配信確認は未完了です。

## 講師紹介・レッスンページ

| URL     | 内容                                             |
| ------- | ------------------------------------------------ |
| `/`     | ホーム                                           |
| `/p/2/` | 講師紹介（Chad・Mihoのプロフィール・経歴・写真） |
| `/p/3/` | レッスン日程・料金・4教室のアクセス              |

Viteの複数HTMLエントリーを使用し、`dist/index.html`、`dist/p/2/index.html`、`dist/p/3/index.html`を出力します。静的ホスティングでの直接アクセス・再読み込みに対応し、追加のルーティングライブラリは使用していません。配信時は`dist/`全体をドキュメントルートに配置してください。

参照元は[講師紹介](https://ohanaeikaiwa.crayon1.com/p/2/)と[レッスン](https://ohanaeikaiwa.crayon1.com/p/3/)です。2026年10月21日にブラウザーで確認できた本文・公開HTMLの内容をもとに、紹介文・説明文は要約・整形し、氏名、経歴、日程、料金、住所を反映しました。ページの追加に伴う、既存ホームページの本文・写真の変更はありません。

レッスンページの検索取得結果とブラウザー表示に差があったため、時間割の教室名・アクセス見出しはブラウザー表示を優先しました。今後、教室の案内が更新された際は`src/lessonContent.ts`などの記載も更新してください。
