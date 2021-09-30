import * as React from 'react';
import { FC } from 'react';
import markdownStyles from './markdown.module.css';

type Props = {
  html: string;
};

export const Markdown: FC<Props> = ({ html: content }) => {
  return <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />;
};

Markdown.displayName = 'PostBody';
