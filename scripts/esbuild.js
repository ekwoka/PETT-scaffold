import { build } from 'esbuild';
import { createRequire } from 'module';
import { getAllTypeScript } from './utils/getAllTypescript.js';
const require = createRequire(import.meta.url);

const dev = process.env.NODE_ENV === 'development';

const paths = await getAllTypeScript(['./src'], ['.ts', '.tsx']);
console.time('esbuild');
build({
  entryPoints: paths,
  outdir: './test',
  inject: [],
  splitting: false,
  format: 'esm',
  bundle: false,
  target: 'esnext',
  platform: 'node',
  minify: false,
  watch: dev
    ? {
        onRebuild(err) {
          if (err) console.error('esbuild failed:', err);
          else console.log('esbuild rebuilt');
        },
      }
    : false,
  plugins: [],
}).then(async (res) => {
  console.log(dev ? 'watching...' : 'JS Build Complete');
  console.timeEnd('esbuild');
});
