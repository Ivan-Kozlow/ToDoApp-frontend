module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:sonarjs/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'jsx-a11y', 'sonarjs', '@tanstack/query'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'@tanstack/query/exhaustive-deps': 'error',
		'@tanstack/query/prefer-query-object-syntax': 'error',
	},
}
