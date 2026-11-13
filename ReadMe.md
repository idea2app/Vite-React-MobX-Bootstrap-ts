![](src/image/logo.png)

# Vite-React-MobX-Bootstrap.ts

[React][1] project scaffold based on [TypeScript][2], [MobX][3] & [Bootstrap][4],
inspired by [WebCell scaffold][5] and built with [Idea React][10].

[![CI & CD](https://github.com/idea2app/Vite-React-MobX-Bootstrap-ts/actions/workflows/main.yml/badge.svg)][6]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][7]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][8]

## Technology stack

- Language: [TypeScript v6][2]
- Component engine: [Preact v11][9] with React compatibility
- State management: [MobX v7][3]
- Component suite: [Idea React v3][10] on [Bootstrap v6][4]
- HTTP Client: [KoAJAX v3][11]
- PWA framework: [Workbox v7][12] via `vite-plugin-pwa`
- Package bundler: [Vite v8][13]
- CI / CD: GitHub [Actions][14] + [Pages][15]

## Extra components

1. [Component samples](src/page/Component.tsx)
2. Rich-text editor
   - HTML version
   - [JSON version](src/component/Editor.tsx)
3. [GitHub logo](src/component/Git/Logo.tsx)
4. [GitHub card](src/component/Git/Card.tsx)
5. Paginated repository table and infinite-scroll list
6. [ECharts-JSX chart](src/page/chart.mdx)
7. Download task manager

## Best practice

1. Install GitHub apps in your organization or account:
   1. [Probot settings](https://github.com/apps/settings) for issue labels and pull request rules
   2. [PR badge](https://pullrequestbadge.com/) to enable online VS Code editing from pull requests
2. Use the **Use this template** button to create a repository in the app-installed namespace.
3. Open the repository in [GitHub Codespaces][7] for an online VS Code environment.
4. Set [Vercel variables][16] as [repository secrets][17] to create an independent preview URL for each commit.
5. Add a [notification step in GitHub Actions][18] for your team messaging app.
6. Ask users to submit feature requests or bug reports through [issue forms][19].
7. Collect issues in [project boards][20] and reference them in pull requests with `closes #issue_number`.

## Development

```shell
pnpm install
pnpm dev
```

Run the type check and lint-staged checks:

```shell
pnpm test
```

Build and preview the production app:

```shell
pnpm build
pnpm preview
```

## References

1. [Why you should use Class component?](https://www.zhihu.com/question/451424245/answer/2484559536)
2. [Why you should use MobX?](https://www.zhihu.com/question/456685038/answer/3142780397)
3. [Why you should use Vite?](https://vite.dev/guide/why.html)

[1]: https://react.dev/
[2]: https://www.typescriptlang.org/
[3]: https://mobx.js.org/
[4]: https://getbootstrap.com/
[5]: https://github.com/EasyWebApp/scaffold
[6]: https://github.com/idea2app/Vite-React-MobX-Bootstrap-ts/actions/workflows/main.yml
[7]: https://codespaces.new/idea2app/Vite-React-MobX-Bootstrap-ts
[8]: https://gitpod.io/?autostart=true#https://github.com/idea2app/Vite-React-MobX-Bootstrap-ts
[9]: https://preactjs.com/
[10]: https://idea-react.pages.dev/
[11]: https://github.com/EasyWebApp/KoAJAX
[12]: https://developers.google.com/web/tools/workbox
[13]: https://vite.dev/
[14]: https://github.com/features/actions
[15]: https://pages.github.com/
[16]: https://github.com/idea2app/Vite-React-MobX-Bootstrap-ts/blob/main/.github/workflows/main.yml
[17]: https://github.com/idea2app/Vite-React-MobX-Bootstrap-ts/settings/secrets/actions
[18]: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/main/.github/workflows/pull-request.yml
[19]: https://github.com/idea2app/Vite-React-MobX-Bootstrap-ts/issues/new/choose
[20]: https://github.com/idea2app/Vite-React-MobX-Bootstrap-ts/projects
