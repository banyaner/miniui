module.exports = {
    'parser': 'babel-eslint',
    'parserOptions': {
        'sourceType': 'module',
        'codeFrame': false
    },
    extends: 'airbnb-base',
    plugins: [
        'html'
    ],
    'env': {
        'node': true,
        'browser': true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    'rules': {
        "no-new": 0,
        "camelcase": 0,
        "no-useless-constructor": 0,
        "class-methods-use-this": 0,
        "no-unused-vars": 0,
        'import/newline-after-import': 1,
        'object-curly-spacing': 0,
        'no-alert': 0,
        'no-plusplus': 0,
        'no-param-reassign': 0,
        'max-len': 0,
        'new-cap': 0,
        'no-console': 0,
        'func-names': 0,
        'global-require': 0,
        "guard-for-in": 0,
        'no-dynamic-require': 0, // 待删除
        'indent': [2, 4, {'SwitchCase': 1}],
        'no-underscore-dangle': 0,
        'no-mixed-operators': 0,
        'no-unused-expressions': 0,
        'semi': [2, 'never'], //不加分号
        'prefer-template': 0,
        'no-trailing-spaces': 0,
        'no-restricted-syntax': 0,
        // don't require .vue extension when importing
        'import/extensions': 0,
        'import/no-unresolved': [0, {commonjs: true, amd: true}],
    },
}