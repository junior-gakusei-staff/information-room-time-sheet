# iformation-room-time-sheet

このプロジェクトは情報室の時間管理システムです。

## 始め方

このプロジェクトを始めるための手順を以下に示します。

### 必要条件

- Node.js (バージョン 14.x 以上を推奨)
- npm (通常Node.jsとともにインストールされます)

### インストール手順

1. リポジトリをクローンします。

   ```bash
   git clone https://github.com/junior-gakusei-staff/iformation-room-time-sheet.git
   ```

2. プロジェクトディレクトリに移動します。

   ```bash
   cd iformation-room-time-sheet
   ```

3. 依存関係をインストールします。

   ```bash
   npm install
   ```

4. 環境変数を設定します。
   - プロジェクトのルートディレクトリに`.env.local`ファイルを作成し、以下の内容を追加します：
     ```
     NEXT_PUBLIC_API_URL=your_api_url_here
     ```
   - `your_api_url_here`を実際のAPIのURLに置き換えてください。

### 使用方法

開発モードでプロジェクトを実行するには：

```bash
npm run dev
```

本番用ビルドを作成するには：

```bash
npm run build
```

本番モードでプロジェクトを実行するには：

```bash
npm run start
```

## 主な依存関係

- Next.js: 14.2.5
- React: 18.x
- date-fns: 3.6.0
- TypeScript: 5.x
- Tailwind CSS: 3.4.1

## 貢献

1. このリポジトリをフォークします。
2. 新しい機能ブランチを作成します (`git checkout -b feature/AmazingFeature`)。
3. 変更をコミットします (`git commit -m 'Add some AmazingFeature'`)。
4. ブランチにプッシュします (`git push origin feature/AmazingFeature`)。
5. プルリクエストを作成します。

## ライセンス

このプロジェクトは [MITライセンス](https://opensource.org/licenses/MIT) の下で公開されています。
