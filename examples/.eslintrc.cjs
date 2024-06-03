/* eslint-env node */
module.exports = {
    parser: '@typescript-eslint/parser',
    root: true,
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:playwright/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        'prettier/prettier': 'error',
    },
    overrides: [
        {
            files: ['**/tests/**/*.{js,ts,tsx}', '**/pages/**/*.{js,ts,tsx}', '**/mocks/**/*.{js,ts,tsx}'],
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:playwright/recommended'],
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/require-await': 'error',
                '@typescript-eslint/no-floating-promises': 'error',
            },
        },
    ],
};
