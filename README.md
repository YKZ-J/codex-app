# Homepage Workspace

pnpm workspacesで管理する、Vite + React + TypeScriptの独立したWebアプリ群です。Tailwind CSS、ESLint、Vitest、React Testing Libraryを各アプリで使用し、リポジトリ全体の整形はPrettierで行います。

| 配置先                          | パッケージ名              | 内容                                                               | 開発ポート | ビルド出力先                         |
| ------------------------------- | ------------------------- | ------------------------------------------------------------------ | ---------- | ------------------------------------ |
| `apps/web/`                     | `simple-homepage`         | [黒岩農場](https://kuroiwafarm.co.jp/)のトップページ再現           | 5173       | `apps/web/dist/`                     |
| `apps/english-school-homepage/` | `english-school-homepage` | [Ohana英会話](https://ohanaeikaiwa.crayon1.com/)のトップページ再現 | 5174       | `apps/english-school-homepage/dist/` |

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

コマンドはリポジトリのルートから実行してください。`pnpm dev`は`apps/web/`を起動します（標準URLは http://localhost:5173 ）。終了は`Ctrl+C`です。

## コマンド

| コマンド                         | 内容                                                       |
| -------------------------------- | ---------------------------------------------------------- |
| `pnpm install --frozen-lockfile` | 単一ロックファイルに従って全ワークスペースをインストール   |
| `pnpm dev`                       | `simple-homepage`の開発サーバー起動                        |
| `pnpm lint`                      | 各ワークスペースのESLintとリポジトリ全体のPrettierチェック |
| `pnpm test`                      | 各ワークスペースの単発テスト                               |
| `pnpm test:watch`                | `simple-homepage`のテスト監視実行                          |
| `pnpm build`                     | 各ワークスペースの型チェックと本番ビルド                   |
| `pnpm preview`                   | `simple-homepage`のビルド成果物を配信                      |
| `pnpm format`                    | リポジトリ全体をPrettierで整形                             |

個別の操作は各アプリのパッケージ名を`--filter`に指定します。

```sh
pnpm --filter simple-homepage dev
pnpm --filter simple-homepage build
pnpm --filter english-school-homepage dev
pnpm --filter english-school-homepage test
```

## 構成と設計

```text
.
├── apps/
│   ├── web/                         # simple-homepage
│   └── english-school-homepage/     # english-school-homepage
│       # 各アプリ内にsrc/、index.html、package.json、
│       # vite.config.ts、eslint.config.js、tsconfig*.jsonを配置
├── packages/                        # 必要になった共有パッケージの配置先
├── package.json                     # ワークスペース実行スクリプト・Prettier
├── pnpm-workspace.yaml
├── pnpm-lock.yaml                   # リポジトリで単一のロックファイル
├── .prettierrc.json
├── .prettierignore
└── AGENTS.md
```

pnpm workspacesのみを使用し、追加のタスク実行ツールは導入していません。ルートの`lint`・`test`・`build`は各ワークスペースの対応するスクリプトを実行します。

アプリ固有のVite・Vitest・TypeScript・ESLint設定と依存関係は各アプリ内で管理します。両アプリで同じ設定でも、現時点では不要な共通化を行わず、それぞれの独立性を維持します。Prettierなどリポジトリ全体で使用するツール・共通設定はルートで管理します。共通設定を変更した場合は、影響を受けるすべてのアプリで品質チェックを実行してください。

アプリ間の直接依存は設けません。複数のアプリで共有する必要が生じたコードだけを`packages/<name>/`に切り出し、利用側から`workspace:*`で参照します。現在、共有パッケージはありません。

TypeScriptはアプリ・設定ファイルともstrictモードです。明示的なanyはESLintで禁止しています。Tailwind CSS v4はViteプラグインで統合し、CSSの`@theme`でテーマを定義します。

現在は静的ページのみのため、ドメイン層、リポジトリ、DIなどの抽象化は設けていません。ビジネスルールが生じたらReactや外部サービスに依存しないTypeScript関数として切り出し、UIから呼び出します。外部通信も必要になった時点で分離し、内側のルールからUI・外部実装へ依存させない方針です。

## 初期構築時の補足

実行環境からnpmレジストリの名前解決ができなかったため、ローカルキャッシュの安定版を利用してインストールしました。依存バージョンは各`package.json`で固定し、推移的依存は`pnpm-lock.yaml`に記録しています。ネットワークを利用できる環境では上記の通常のインストール手順を使用してください。

## GitHub Pagesへの公開

| アプリ     | 公開URL                                          | 公開方式                                       |
| ---------- | ------------------------------------------------ | ---------------------------------------------- |
| 黒岩農場   | https://ykz-j.github.io/homepage-demo/           | このリポジトリのGitHub Actions → Pages         |
| 英会話教室 | https://ykz-j.github.io/english-school-homepage/ | SSH Deploy Keyで別リポジトリの`gh-pages`へpush |

ソースと依存管理はこのpnpmモノレポで維持します。公開先に送るのは各アプリのビルド成果物のみです。

### ワークフロー

- `.github/workflows/deploy.yml`：`simple-homepage`だけをLint・テスト・ビルドし、`apps/web/dist`を公式Pages Actionsで公開します。英会話サイトのビルドやコピーは行いません。
- `.github/workflows/deploy-english-school.yml`：`english-school-homepage`だけをLint・テスト・ビルドし、`ENGLISH_DEPLOY_KEY`で`YKZ-J/english-school-homepage`の`gh-pages`へ通常のpushを行います。秘密鍵はrunnerの一時領域に置き、終了時に削除します。GitHub公式のEd25519ホスト鍵を固定し、ホスト鍵検証を必須にしています。

両方ともNode.js 24・packageManager指定のpnpmを使用し、`pnpm install --frozen-lockfile`を実行します。各アプリ・`packages/**`・ルートの依存管理ファイル・それぞれのワークフローが変更された`main`へのpushで自動実行します。英会話用スクリプトとホスト鍵の変更も英会話のデプロイ対象です。公開先ごとにconcurrencyを分け、同じ公開先のデプロイは順番に実行します。Actionsから`main`を選んで手動実行もできます。

### 公開と旧URLの削除

新しい英会話URLの表示確認と旧URL削除のユーザー承認が完了したため、黒岩農場の公開ガードを解除しました。`ENGLISH_LEGACY_REMOVAL_APPROVED`の設定は不要です。既に登録している場合もワークフローでは参照しません。

1. 変更を`main`へpushします。黒岩農場と英会話の各ワークフローが実行されます。
2. 黒岩農場のPages Sourceは **GitHub Actions**、英会話の公開先は **Deploy from a branch → gh-pages / (root)** を維持します。
3. 黒岩農場のデプロイ成功後、旧URL https://ykz-j.github.io/homepage-demo/english-school-homepage/ は削除されます。Pagesの反映・キャッシュ更新後に404になることを確認してください。リダイレクトは作成しません。
4. 黒岩農場 https://ykz-j.github.io/homepage-demo/ と英会話 https://ykz-j.github.io/english-school-homepage/ が引き続き表示されることを確認します。

必要に応じて各ワークフローの **Run workflow** から`main`を指定して再公開できます。

### パスとルーティング

本番baseは黒岩農場が`/homepage-demo/`、英会話が`/english-school-homepage/`です。ローカル開発時のbaseは両方`/`を維持します。内部リンクとページ判定もbaseを考慮します。React Routerは使用していません。黒岩農場の静的HTML生成と英会話の複数HTMLエントリーにより、下層ページへの直接アクセス・再読み込みに対応します。新しいパスを追加するときも対応するHTMLを生成してください。

英会話の認証・公開方式の詳細は[英会話アプリのREADME](apps/english-school-homepage/README.md#github-pages)を参照してください。ホスト鍵の根拠は[GitHub公式ドキュメント](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)です。

## この実行環境で未完了の確認

- 現在はGitリポジトリとして初期化済みです。この変更でコミット・pushは行っていません。
- `pnpm dev --host 127.0.0.1` はポート待ち受けが権限エラー（`EPERM`）で拒否されました。ローカル端末で `pnpm dev` を実行し、ブラウザーでトップページを確認してください。この環境に起動中の開発サーバーはありません。

## 黒岩農場アプリの実装範囲

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
