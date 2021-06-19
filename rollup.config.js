import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import size from 'rollup-plugin-size';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import commonJs from '@rollup/plugin-commonjs';

const extensions = ['.js', '.ts'];

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index',
  output: [
    { file: 'dist/cjs/bundle.cjs.js', format: 'cjs' },
    { file: 'dist/esm/bundle.esm.js', format: 'esm' },
    { file: 'dist/umd/bundle.umd.js', format: 'umd', name: 'TSCollection' },
  ],
  plugins: [
    nodeResolve({ extensions }),
    babel({ exclude: 'node_modules/**', extensions, babelHelpers: 'bundled' }),
    commonJs(),
    terser(),
    size(),
    visualizer({
      template: 'treemap',
    }),
  ],
};

export default options;
