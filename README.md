# Simple Homepage

React + TypeScriptのシンプルなホームページです。Vite公式の `react-ts` テンプレート構成をベースに、Tailwind CSS、テスト、整形設定を追加しています。

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

| コマンド          | 内容                                           |
| ----------------- | ---------------------------------------------- |
| `pnpm dev`        | 開発サーバー起動                               |
| `pnpm lint`       | ESLint（型情報を使用）とPrettierチェック       |
| `pnpm test`       | Vitest + React Testing Libraryによる単発テスト |
| `pnpm test:watch` | テストの監視実行                               |
| `pnpm build`      | TypeScript型チェックと本番ビルド（`dist/`）    |
| `pnpm preview`    | ビルド成果物のローカル配信                     |
| `pnpm format`     | Prettierで整形                                 |

## 構成と設計

```text
src/
├── main.tsx          # Reactの起動
├── App.tsx           # トップページの表示
├── App.test.tsx      # 見出しと紹介文の表示テスト
├── index.css         # Tailwind CSSの読み込みと基本スタイル
└── test/setup.ts     # DOM matcherとテスト後のcleanup
```

TypeScriptはアプリ・設定ファイルともstrictモードです。明示的なanyはESLintで禁止しています。Tailwind CSS v4はViteプラグインで統合し、CSSの`@theme`でテーマを定義します。

現在は静的ページのみのため、ドメイン層、リポジトリ、DIなどの抽象化は設けていません。ビジネスルールが生じたらReactや外部サービスに依存しないTypeScript関数として切り出し、UIから呼び出します。外部通信も必要になった時点で分離し、内側のルールからUI・外部実装へ依存させない方針です。

## 初期構築時の補足

実行環境からnpmレジストリの名前解決ができなかったため、ローカルキャッシュの安定版を利用してインストールしました。依存バージョンは`package.json`で固定し、推移的依存は`pnpm-lock.yaml`に記録しています。ネットワークを利用できる環境では上記の通常のインストール手順を使用してください。

次の開発では掲載内容・デザインを決定し、必要な機能とテストを追加してください。公開先やCIの設定は初期構築の範囲外です。

## この実行環境で未完了の確認

- `git init` は `.git` への書き込み権限がなく失敗しました。ローカル端末で `git init` を実行してください。コミット・pushは行っていません。
- `pnpm dev --host 127.0.0.1` はポート待ち受けが権限エラー（`EPERM`）で拒否されました。ローカル端末で `pnpm dev` を実行し、ブラウザーでトップページを確認してください。この環境に起動中の開発サーバーはありません。
