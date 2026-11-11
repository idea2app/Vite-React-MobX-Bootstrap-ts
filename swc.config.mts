import type { Options } from '@swc/core';

export const swcOptions: Options = {
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
};
