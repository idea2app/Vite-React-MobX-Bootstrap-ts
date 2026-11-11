import Code from '@editorjs/code';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import { ToolConstructable } from '@editorjs/editorjs';
import { WrapperProps } from '@react-editor-js/core';
import { createReactEditorJS } from 'react-editor-js';
import { FC } from 'react';

const Tools: Record<string, ToolConstructable> = {
  list: List,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  header: Header,
  quote: Quote
};

const Core = createReactEditorJS();

export const EditorJS: FC<WrapperProps> = props => (
  <Core tools={Tools} {...props} />
);
