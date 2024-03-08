/* eslint-env node */
module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  overrides: [
    // Konfiguracja dla lekcji 2x3: Testy e2e
    {
      files: [
        '**/tests/**/*.{js,ts,tsx}',
        '**/pages/**/*.{js,ts,tsx}',
        '**/mocks/**/*.{js,ts,tsx}',
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:playwright/recommended',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
      },
    },
  ],
};
