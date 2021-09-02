import NextLink from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { EDIT_URL } from '../constants/link';
import { addTagToSlug, getSlug, removeFromLast } from '../lib/docs/utils';
import { RouteItem } from '../lib/types';

export interface DocsPageFooterProps {
  route: RouteItem;
  href: string;
  prevRoute?: RouteItem;
  nextRoute?: RouteItem;
}

function areEqual(prevProps: DocsPageFooterProps, props: DocsPageFooterProps) {
  return prevProps.route?.path === props.route?.path;
}

export const DocsPageFooter = React.memo<DocsPageFooterProps>(({ route, href, prevRoute, nextRoute }) => {
  const { query } = useRouter();
  const { tag, slug } = getSlug(query as { slug: string[] });
  const editUrl = `${EDIT_URL}${route?.path}`;

  return (
    <>
      <div className="py-12">
        <div className="space-y-8 md:flex space-between items-center md:space-y-0 md:space-x-8">
          {prevRoute && prevRoute.path ? (
            <NextLink href={addTagToSlug(removeFromLast(prevRoute.path, '.'), tag as string)}>
              <a className="flex-1 max-w-md block border border-gray-200 p-4 rounded-lg betterhover:hover:text-pink-600 duration-150 ease-out">
                <span className="text-sm block text-gray-500 mb-1 ">Previous</span>
                <span className="text-xl block  font-semibold">{prevRoute.title}</span>
              </a>
            </NextLink>
          ) : (
            <div className="flex-1" />
          )}
          {nextRoute && nextRoute.path ? (
            <NextLink href={addTagToSlug(removeFromLast(nextRoute.path, '.'), tag as string)}>
              <a className="flex-1 max-w-md text-right block border border-gray-200  p-4 rounded-lg betterhover:hover:text-pink-600 duration-150 ease-out">
                <span className="text-sm block text-gray-500 mb-1 ">Next</span>
                <span className="text-xl block  font-semibold ">{nextRoute.title}</span>
              </a>
            </NextLink>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
      <div className="flex my-2">
        <div className="md:flex-1 md:text-right">
          {tag ? (
            <NextLink href={href} as={slug}>
              <a className="text-gray-600 underline">Go to the live version of this page</a>
            </NextLink>
          ) : (
            <a href={editUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
              Edit this page on GitHub
            </a>
          )}
        </div>
      </div>
    </>
  );
}, areEqual);

DocsPageFooter.displayName = 'DocsPageFooter';
