import { configDefaults, defineConfig } from 'vitest/config';

const PLAYWRIGHT_TESTS = ['**/*.spec.ts'];

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, ...PLAYWRIGHT_TESTS],
  },
});
