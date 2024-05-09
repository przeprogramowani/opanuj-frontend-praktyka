import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'index.ts',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
      },
    ],
    plugins: [nodeResolve(), typescript()],
  },
  {
    input: 'dist/index.d.ts',
    output: { file: 'dist/index.d.ts', format: 'esm' },
    plugins: [
      dts(),
      replace({
        delimiters: ['', ''],
        values: {
          './dist/js/tokens': './js/tokens',
        },
        preventAssignment: true,
      }),
    ],
  },
];
