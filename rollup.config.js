import { babel } from '@rollup/plugin-babel';
import commonJs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import size from 'rollup-plugin-size';
import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';

const extensions = ['.js', '.ts'];

/** @returns {import("rollup").RollupOptions[]} */
const utils = () => {
  const UTILS = 'packages/utils';

  return [
    {
      input: `${UTILS}/src/index.ts`,
      output: [
        { file: `${UTILS}/dist/cjs/bundle.cjs.js`, format: 'cjs' },
        { file: `${UTILS}/dist/esm/bundle.esm.js`, format: 'esm' },
      ],
      plugins: [
        nodeResolve({ extensions }),
        babel({
          exclude: /node_modules/,
          extensions,
          babelHelpers: 'bundled',
          configFile: path.resolve(__dirname, `${UTILS}`, 'babel.config.json'),
        }),
        commonJs(),
        terser(),
        size(),
        visualizer({
          template: 'treemap',
        }),
      ],
    },
  ];
};

/** @returns {import("rollup").RollupOptions[]} */
const core = () => {
  const CORE = 'packages/core';

  return [
    {
      input: `${CORE}/src/index.ts`,
      output: [
        { file: `${CORE}/dist/cjs/bundle.cjs.js`, format: 'cjs' },
        { file: `${CORE}/dist/esm/bundle.esm.js`, format: 'esm' },
        { file: `${CORE}/dist/umd/bundle.umd.js`, format: 'umd', name: 'TSCollection' },
      ],
      plugins: [
        nodeResolve({ extensions }),
        babel({
          exclude: /node_modules/,
          extensions,
          babelHelpers: 'bundled',
          configFile: path.resolve(__dirname, `${CORE}`, 'babel.config.json'),
        }),
        commonJs(),
        terser(),
        size(),
        visualizer({
          template: 'treemap',
        }),
      ],
    },
  ];
};

export default function rollup(options) {
  let builds = [...utils(options), ...core(options)];

  return builds;
}
