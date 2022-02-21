// eslint-disable-next-line no-undef
module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    }
};