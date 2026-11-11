import { fileURLToPath } from 'node:url';

import mdx from '@mdx-js/rollup';
import postcssPresetEnv from 'postcss-preset-env';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import swc from 'unplugin-swc';

import { swcOptions } from './swc.config.mts';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/Vite-React-MobX-Bootstrap-ts/',
    resolve: {
      alias: {
        'idea-react/dist/style.css': fileURLToPath(
          new URL('./node_modules/idea-react/dist/style.css', import.meta.url)
        )
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        scopeBehaviour: 'local',
        generateScopedName: '[name]_[local]_[hash:5]'
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      },
      postcss: {
        plugins: [postcssPresetEnv()]
      }
    },
    plugins: [
      VitePWA({
        injectRegister: false,
        manifest: {
          name: 'Idea React scaffold',
          short_name: 'Idea React',
          start_url: '.',
          description:
            'React project scaffold based on TypeScript, MobX, Idea React and Vite.',
          scope: '.',
          display: 'standalone',
          orientation: 'any',
          lang: 'en-US',
          dir: 'ltr',
          theme_color: 'rgba(0,0,0,0.5)',
          background_color: 'transparent',
          icons: [
            {
              src: '/logo.png',
              type: 'image/png',
              sizes: '180x180'
            }
          ]
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
        }
      }),
      mdx(),
      swc.vite({ ...swcOptions, tsconfigFile: false })
    ],
    define: {
      __APP_ENV__: env.APP_ENV
    }
  };
});
