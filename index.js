// Based on https://github.com/pvdlg/conventional-changelog-metahub (MIT)

const isJapanese = Intl.Collator().resolvedOptions().locale.startsWith("ja")
const t = ([english, japanese]) => isJapanese ? japanese : english

const commitTypes = {
	feat: {
		emoji: "✨",
		title: t(["Features", "新機能"]),
		description: t(["A new feature", "新しい機能の追加"])
	},
	fix: {
		emoji: "🐛",
		title: t(["Bug Fixes", "バグ修正"]),
		description: t(["A bug fix", "バグの修正"])
	},
	perf: {
		emoji: "🚀",
		title: t(["Performance Improvements", "パフォーマンスの改善"]),
		description: t([
			"A code change that improves performance",
			"パフォーマンスを改善するコードの変更"
		])
	},
	build: {
		emoji: "🛠️",
		title: t(["Builds", "ビルド"]),
		description: [
			"Changes that affect the build system or external dependencies",
			"ビルドシステムや外部の依存関係に影響する変更"
		]
	},
	refactor: {
		emoji: "♻️",
		title: t(["Code Refactoring", "リファクタリング"]),
		description: t([
			"A code change that neither fixes a bug nor adds a feature",
			"バグの修正や新機能の追加以外の、コードの変更"
		])
	},
	docs: {
		emoji: "📝",
		title: t(["Documentation", "ドキュメンテーション"]),
		description: t(["Documentation only changes", "ドキュメンテーションのみの変更"])
	},
	content: {
		emoji: "✒️",
		title: t(["Contents", "コンテンツ"]),
		description: t(["Update website content", "ウェブサイトの内容の更新"])
	},
	test: {
		emoji: "🚨",
		title: t(["Tests", "テスト"]),
		description: t([
			"Adding missing tests or correcting existing tests",
			"不足しているテストの追加、またはすでに存在するテストの修正"
		])
	},
	ci: {
		emoji: "⚙️",
		title: t(["Continuous Integrations", "継続的インテグレーション (CI)"]),
		description: t([
			"Changes to our CI configuration files and scripts",
			"CI設定ファイルおよびスクリプトの変更"
		])
	},
	chore: {
		emoji: "✏️",
		title: t(["Chores", "その他"]),
		description: t([
			"Other changes that don’t modify src or test files",
			"ソースコードやテストを改変しない、その他の変更"
		])
	},
	revert: {
		emoji: "⏪️",
		title: t(["Reverts", "差し戻し"]),
		description: t(["Reverts a previous commit", "前回のコミットの差し戻し (リバート)"])
	},
	initial: {
		emoji: "🎉",
		title: t(["Initial", "初回コミット"]),
		description: t(["Initial commit", "リポジトリに対して初めてするコミット"])
	},
	dependencies: {
		emoji: "⬆️",
		title: t(["Dependencies", "依存関係"]),
		description: t(["Update dependency", "依存関係の更新"])
	}
}

const types = Object.entries(commitTypes).map(
	([type, { emoji, description }]) => ({
		value: [emoji, type].join(" "),
		name: `${type}: ${description}`
	})
)

module.exports = {
	types,
	messages: {
		type: t([undefined, "コミットする変更の種類を選択してください:"]),
		scope: t([undefined, "この変更のスコープを選んでください:"]),
		subject: t([undefined, "この変更について短い説明を書いてください:\n"]),
		footer: t([undefined, "この変更によって解決したIssueなどをリストアップしてください(任意)。例: #31, #34:\n"]),
		confirmCommit: t([undefined, "上記のコミットで本当によろしいですか？:\n"])
	},
	skipQuestions: ["scope", "body"],
	subjectLimit: 100,
	upperCaseSubject: true
}
