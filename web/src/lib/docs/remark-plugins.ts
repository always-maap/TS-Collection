import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkEmoji from 'remark-emoji';
import remarkFootnotes from 'remark-footnotes';
import remarkImages from 'remark-images';
import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';

export default [
  remarkSlug,
  [
    remarkAutolinkHeadings,
    {
      behavior: 'append',
      linkProperties: {
        class: ['anchor'],
        title: 'Direct link to heading',
      },
    },
  ],
  [
    remarkToc,
    {
      skip: 'Reference',
      maxDepth: 6,
    },
  ],
  remarkEmoji,
  remarkFootnotes,
  remarkImages,
];
