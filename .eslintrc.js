// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
	sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    //'plugin:vue/essential',
	'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    //'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	//2�s�ǉ�
	'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	'import/no-webpack-loader-syntax': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	
  }
}
