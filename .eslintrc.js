module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true
	},
	parserOptions: {
    parser: "babel-eslint",
		ecmaVersion: 8,
		sourceType: "module",
		ecmaFeatures: {
			impliedStrict: true
		}
	},
	extends: ["plugin:vue/essential", "plugin:prettier/recommended"],
	plugins: ["prettier", "html"],
	// add your custom rules here
	rules: {
		"prettier/prettier": "warn",
		"no-console": "warn"
	}
};
