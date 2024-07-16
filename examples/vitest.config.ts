import { configDefaults, defineConfig } from 'vitest/config';

const PLAYWRIGHT_TESTS = [
  'module2/lesson2/**',
  'module2/lesson6-ai/guess-password-finish/tests/guess-pickle-rick.spec.ts',
];

const KARMA_TESTS = ['module1/lesson2/_solutions/signals-angular/**'];

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, ...PLAYWRIGHT_TESTS, ...KARMA_TESTS],
  },
});
