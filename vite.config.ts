import mdx from '@mdx-js/rollup';
import postcssPresetEnv from 'postcss-preset-env';
import swc from 'unplugin-swc';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        base: './',
        resolve: {
            alias: [
                { find: /^react$/, replacement: 'preact/compat' },
                { find: /^react-dom$/, replacement: 'preact/compat' },
                {
                    find: /^react\/jsx-runtime$/,
                    replacement: 'preact/jsx-runtime'
                },
                {
                    find: /^react\/jsx-dev-runtime$/,
                    replacement: 'preact/jsx-dev-runtime'
                }
            ]
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
                    name: 'React-MobX-Bootstrap-TS',
                    short_name: 'React Demo',
                    start_url: './',
                    description:
                        'React project scaffold based on TypeScript, MobX & Bootstrap, inspired by WebCell scaffold.',
                    scope: './',
                    display: 'standalone',
                    orientation: 'any',
                    lang: 'en-US',
                    dir: 'ltr',
                    theme_color: 'rgba(0,0,0,0.5)',
                    background_color: 'transparent',
                    icons: [
                        {
                            src: 'image/logo.png',
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
            swc.vite({
                tsconfigFile: false,
                jsc: {
                    target: 'es2015',
                    parser: {
                        syntax: 'typescript',
                        tsx: true,
                        decorators: true
                    },
                    transform: {
                        decoratorVersion: '2022-03',
                        useDefineForClassFields: true,
                        react: { runtime: 'automatic' }
                    }
                }
            })
        ],
        define: {
            __APP_ENV__: env.APP_ENV
        }
    };
});
