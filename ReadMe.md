![](public/logo.png)

# Vite-React-MobX-Idea.ts

[React][1] project scaffold based on [TypeScript][2], [MobX][3], [Idea React][4]
and [Vite][5], inspired by [WebCell scaffold][6].

[![CI & CD](https://github.com/idea2app/Vite-React-MobX-Bootstrap-ts/actions/workflows/main.yml/badge.svg)][7]

## Technology stack

- Language: [TypeScript v7][2]
- Component engine: [React 19][1]
- State management: [MobX v7][3]
- Component suite: [Idea React 3][4] + Bootstrap 6 alpha
- Package bundler: [Vite v8][5] + SWC
- PWA framework: [Workbox][8] via `vite-plugin-pwa`
- CI / CD: GitHub [Actions][12] + [Pages][13]

## Development

```shell
pnpm install
pnpm dev
```

Run the production type check and build:

```shell
pnpm check
pnpm build
pnpm preview
```

## Example pages

- Upstream project cards
- Idea React component samples and rich-text editors
- Paginated GitHub repository table
- Infinite-scroll repository cards
- ECharts-JSX chart in MDX
- Download task manager

[1]: https://react.dev/
[2]: https://www.typescriptlang.org/
[3]: https://mobx.js.org/
[4]: https://github.com/idea2app/Idea-React
[5]: https://vite.dev/
[6]: https://github.com/EasyWebApp/scaffold
[7]: https://github.com/idea2app/Vite-React-MobX-Bootstrap-ts/actions
[8]: https://developers.google.com/web/tools/workbox
[12]: https://github.com/features/actions
[13]: https://pages.github.com/
