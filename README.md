# 黒岩農場 トップページ再現

[参照サイト](https://kuroiwafarm.co.jp/)のトップページをもとにしたReact + TypeScriptの実装です。Vite公式の `react-ts` テンプレート構成をベースに、Tailwind CSS、テスト、整形設定を追加しています。

## 開発環境

- Node.js 24（`.nvmrc` は動作確認した24.12.0）
- pnpm 10.27.0（`packageManager` で固定）

```sh
nvm install
nvm use
corepack enable
corepack prepare pnpm@10.27.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

開発サーバーの標準URLは http://localhost:5173 です。終了は `Ctrl+C`。

## コマンド

| コマンド          | 内容                                                 |
| ----------------- | ---------------------------------------------------- |
| `pnpm dev`        | 開発サーバー起動                                     |
| `pnpm lint`       | ESLint（型情報を使用）とPrettierチェック             |
| `pnpm test`       | Vitest + React Testing Libraryによる単発テスト       |
| `pnpm test:watch` | テストの監視実行                                     |
| `pnpm build`      | TypeScript型チェックと本番ビルド（`apps/web/dist/`） |
| `pnpm preview`    | ビルド成果物のローカル配信                           |
| `pnpm format`     | Prettierで整形                                       |

## 構成と設計

```text
.
├── apps/
│   └── web/
│       ├── src/              # Reactページ・表示データ・テスト・CSS
│       ├── index.html
│       ├── vite.config.ts    # Vite・Vitest・Tailwind CSS
│       ├── eslint.config.js
│       ├── tsconfig*.json
│       └── package.json      # Webアプリの依存関係・スクリプト
├── packages/                 # 将来の共有パッケージ用（現在は空）
├── package.json              # 各ワークスペースへの実行入口・Prettier
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── .prettierrc.json
```

pnpm workspacesのみで管理し、追加のモノレポツールは使用していません。上記コマンドはすべてルートから実行します。`lint`・`test`・`build`は各パッケージのスクリプトを実行し、`lint`はリポジトリ全体の整形も確認します。Webアプリだけを指定する場合は`pnpm --filter simple-homepage <command>`を使用できます。

共有が必要になった時点で`packages/<name>/package.json`を追加し、利用側から`workspace:*`で参照します。現時点では共有パッケージや共通設定パッケージは追加していません。

TypeScriptはアプリ・設定ファイルともstrictモードです。明示的なanyはESLintで禁止しています。Tailwind CSS v4はViteプラグインで統合し、CSSの`@theme`でテーマを定義します。

現在は静的ページのみのため、ドメイン層、リポジトリ、DIなどの抽象化は設けていません。ビジネスルールが生じたらReactや外部サービスに依存しないTypeScript関数として切り出し、UIから呼び出します。外部通信も必要になった時点で分離し、内側のルールからUI・外部実装へ依存させない方針です。

## 初期構築時の補足

実行環境からnpmレジストリの名前解決ができなかったため、ローカルキャッシュの安定版を利用してインストールしました。依存バージョンは各`package.json`で固定し、推移的依存は`pnpm-lock.yaml`に記録しています。ネットワークを利用できる環境では上記の通常のインストール手順を使用してください。

公開先やCIの設定は含めていません。

## この実行環境で未完了の確認

- 現在はGitリポジトリとして初期化済みです。この変更でコミット・pushは行っていません。
- `pnpm dev --host 127.0.0.1` はポート待ち受けが権限エラー（`EPERM`）で拒否されました。ローカル端末で `pnpm dev` を実行し、ブラウザーでトップページを確認してください。この環境に起動中の開発サーバーはありません。

## トップページの実装範囲

- ヘッダー、写真とキャッチコピー、農場紹介、6事業の交互レイアウト、お知らせ、オンラインショップ導線、フッターを実装しました。
- Tailwind CSSでPC・タブレット・スマートフォン向けの配置を設定しています。
- 開閉メニューはEscapeキーで閉じ、開閉ボタンへフォーカスを戻します。モーション軽減設定にも対応しています。
- 写真は参照サイトの画像URLを使用しています。ローカル保存はできていないため、表示には参照サイトへの接続が必要です。
- ロゴは文字組みによる近似です。事業説明の本文は要約しています。下層ページは作成しておらず、関連リンクは参照サイトへ移動します。
- 参照サイトのスクリーンショット・CSSの取得とブラウザー実表示の確認ができていないため、余白・書体・色・画像位置の完全一致は未検証です。

## 英会話教室アプリ

`apps/english-school-homepage/`に[Ohana英会話](https://ohanaeikaiwa.crayon1.com/)の見た目をもとにしたアプリを追加しています。

```sh
pnpm --filter english-school-homepage dev
```

開発URLは http://localhost:5174 です。既存の`pnpm dev`は従来どおり`apps/web/`を起動します。ルートの`pnpm lint`・`pnpm test`・`pnpm build`は両方のアプリを対象にします。詳細は[英会話アプリのREADME](apps/english-school-homepage/README.md)を参照してください。
