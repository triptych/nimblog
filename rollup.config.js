import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import css from 'rollup-plugin-import-css';
import jsx from 'acorn-jsx';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/index.tsx',
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ jsx: 'preserve' }),
    scss(),
    css(),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
    }),
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    plugins: [
      getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
      }),
    ],
  },
};
