declare module '*.less' {
  const map: Record<string, string>;

  export default map;
}

declare module '*.mdx' {
  const MDXComponent: import('react').ComponentType;

  export default MDXComponent;
}

declare module 'idea-react/dist/style.css';

declare module 'browser-unhandled-rejection' {
  export const auto: () => void;
}

declare module '@editorjs/*' {
  const Plugin: import('@editorjs/editorjs').ToolConstructable;

  export default Plugin;
}
