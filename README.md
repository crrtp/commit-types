# @crrtp/commit-types

[cz-customizable](https://github.com/leoforfree/cz-customizable)の設定ファイルです。私のプロジェクトではだいたい使われます。

## 設定方法

### 1. インストール

**GitHub Packagesの認証が済んだら**、パッケージマネージャーを使ってインストールします。

```console
$ pnpm i -D cz-customizable @crrtp/commit-types
```

### 2. スクリプトの追加

`scripts`に`commit`というスクリプトを追加します。

```json
"scripts": {
  "commit": "node ./node_modules/cz-customizable/standalone.js"
}
```

### 3. `.cz-config.js`の作成

`package.json`と同じディレクトリに`.cz-config.js`というファイルを作り、ファイルの内容を以下の通りにしてください。

```js
module.exports = require("./node_modules/@crrtp/commit-types")
```

## コミットメッセージのフォーマット

生成されるコミットメッセージのフォーマットは以下の通りです。

```
${emoji} ${type}: ここにコミットメッセージを書きます (100文字以下)
```

つまり、実際に文章を入れると以下のようになります。

```
✨ feat: UIの大幅アップデート
```

コミットの種類については以下の通りです。

| `emoji` | `type` | `title`[^unused] | `description` |
|:--:| --- | --- | --- |
| ✨ | feat | 新機能 | 新しい機能の追加 |
| 🐛 | fix | バグ修正 | バグの修正 |
| 🚀 | perf | パフォーマンスの改善 | パフォーマンスを改善するコードの変更 |
| 🛠️ | build | ビルド | ビルドシステムや外部の依存関係に影響する変更 |
| ♻️ | refactor | リファクタリング | バグの修正や新機能の追加以外の、コードの変更 |
| 📝 | docs | ドキュメンテーション | ドキュメンテーションのみの変更 |
| ✒️ | content | コンテンツ | ウェブサイトの内容の更新 |
| 🚨 | test | テスト | 不足しているテストの追加、またはすでに存在するテストの修正 |
| ⚙️ | ci | CI[^ci] | CI設定ファイルおよびスクリプトの変更 |
| ✏️ | chore | その他 | ソースコードやテストを改変しない、その他の変更 |
| ⏪️ | revert | 差し戻し | 前回のコミットの差し戻し (リバート) |
| 🎉 | initial | 初回コミット | リポジトリに対して初めてするコミット |
| ⬆️ | dependencies | 依存関係 | 依存関係の更新 |

[^unused]: ソースコード内で不使用。
[^ci]: 継続的インテグレーション

## ライセンス

[MIT License](./LICENSE)

また、この設定ファイルは、[pvdlg/conventional-changelog-metahub](https://github.com/pvdlg/conventional-changelog-metahub) (MIT)を元にしています。
