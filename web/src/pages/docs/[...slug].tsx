import { Banner } from 'components/Banner';
import { DocsPageFooter } from 'components/DocsPageFooter';
import Footer from 'components/Footer';
import MDXComponents from 'components/MDXComponents';
import { Seo } from 'components/Seo';
import { Sidebar } from 'components/Sidebar';
import { SidebarCategory } from 'components/SidebarCategory';
import { SidebarHeading } from 'components/SidebarHeading';
import { SidebarMobile } from 'components/SidebarMobile';
import { SidebarPost } from 'components/SidebarPost';
import { Sticky } from 'components/Sticky';
import { Toc } from 'components/Toc';
import addRouterEvents from 'components/addRouterEvents';
import { Nav } from 'components/layout/Nav';
import s from 'components/markdown.module.css';
import { useIsMobile } from 'components/useIsMobile';
import matter from 'gray-matter';
import { findRouteByPath } from 'lib/docs/findRouteByPath';
import {
  getCurrentTag,
  fetchRemoteDocsManifest,
  fetchLocalDocsManifest,
  getPaths,
  getRawFileFromLocal,
} from 'lib/docs/page';
import rehypeDocs from 'lib/docs/rehype-docs';
import remarkPlugins from 'lib/docs/remark-plugins';
import { addTagToSlug, getSlug, removeFromLast } from 'lib/docs/utils';
import { getRouteContext } from 'lib/get-route-context';
import { getRawFileFromRepo } from 'lib/github/raw';
import { RouteItem, Page } from 'lib/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

interface DocsProps {
  page: Page;
  routes: RouteItem[];
  route: RouteItem;
}

export default function Docs({ page, routes, route: _route }: DocsProps) {
  const router = useRouter();
  const { asPath, isFallback, query } = router;
  const isMobile = useIsMobile();

  const { route, prevRoute, nextRoute } = getRouteContext(_route, routes);
  const title = route && `${page.title || route.title} | Formik`;
  const { tag } = getSlug(query as { slug: string[] });

  // This effect adds `next/link`-like behavior to any non-hash relative link
  // @source @timer
  React.useEffect(() => {
    const listeners: any[] = [];
    document.querySelectorAll('.docs .relative-link').forEach((node) => {
      const href = node.getAttribute('href');
      // Exclude paths like #setup and hashes that have the same current path
      if (href && href[0] !== '#') {
        // Handle any relative path
        router.prefetch(href);

        listeners.push(
          addRouterEvents(node, router, {
            href,
          })
        );
      }
    });
    return () => {
      listeners.forEach((cleanUpListener) => cleanUpListener());
    };
  }, [router]);

  if (!route && !isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {tag && (
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      )}
      <div>
        <Banner />
        {isMobile ? (
          <Nav />
        ) : (
          <Sticky>
            <Nav />
          </Sticky>
        )}
        {route ? (
          <>
            <Seo title={title || page.title} description={page.description} />
            <div className="block">
              <>
                <Sticky shadow>
                  <SidebarMobile>
                    <SidebarRoutes isMobile={true} routes={routes} />
                  </SidebarMobile>
                </Sticky>

                <div className="container mx-auto pb-12 pt-6 content">
                  <div className="flex relative">
                    <Sidebar fixed>
                      <SidebarRoutes routes={routes} />
                    </Sidebar>

                    <div className={s['markdown'] + ' w-full docs'}>
                      <h1>{page.title}</h1>
                      <div className={s['markdown']}>
                        {' '}
                        <MDXRemote {...page.mdxSource} components={MDXComponents} />
                      </div>
                      <DocsPageFooter
                        href={route?.path || ''}
                        route={route!}
                        prevRoute={prevRoute}
                        nextRoute={nextRoute}
                      />
                    </div>
                    {!route?.path?.includes('example') ? (
                      <div className="hidden xl:block ml-10 flex-shrink-0" style={{ width: 200 }}>
                        <div className="sticky top-24 ">
                          <h4 className="font-semibold uppercase text-sm mb-2 mt-2 text-gray-500">
                            On this page
                          </h4>
                          <Toc key={asPath} />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </>
            </div>
          </>
        ) : (
          <div>loading....</div>
        )}
      </div>
      <Footer />
      <style jsx>{`
        .docs {
          min-width: calc(100% - 300px - 1rem - 200px);
        }
      `}</style>
    </>
  );
}

function getCategoryPath(routes: RouteItem[]) {
  const route = routes.find((r) => r.path);
  return route && removeFromLast(route.path!, '/');
}

function SidebarRoutes({
  isMobile,
  routes: currentRoutes,

  level = 1,
}: {
  isMobile?: boolean;
  routes: RouteItem[];

  level?: number;
}) {
  const { query } = useRouter();
  const { tag, slug } = getSlug(query as any);

  return (currentRoutes as RouteItem[]).map(({ path, title, routes, heading, open }, idx) => {
    if (routes) {
      const pathname = getCategoryPath(routes);
      const selected = slug.startsWith(pathname as any);
      const opened = selected || isMobile ? false : open;

      if (heading) {
        return (
          <SidebarHeading key={`${pathname}-heading-${idx}`} title={title}>
            <SidebarRoutes isMobile={isMobile} routes={routes} level={level + 1} />
          </SidebarHeading>
        );
      }

      return (
        <SidebarCategory
          key={`${pathname}-category-${idx}`}
          isMobile={isMobile}
          level={level}
          title={title}
          selected={selected}
          opened={opened}
        >
          <SidebarRoutes isMobile={isMobile} routes={routes} level={level + 1} />
        </SidebarCategory>
      );
    }

    const href = '/docs/[...slug]';
    const pagePath = removeFromLast(path!, '.');
    const pathname = addTagToSlug(pagePath, tag);
    const selected = slug.startsWith(pagePath);
    const route = { href, path, title, pathname, selected };
    return <SidebarPost key={title} isMobile={isMobile} level={level} route={route} />;
  }) as any;
}

export const getStaticProps: GetStaticProps<any, { slug: string[] }> = async ({ params }) => {
  const { tag, slug } = getSlug(params ?? { slug: [] });
  const currentTag = await getCurrentTag(tag);
  // console.log('tag', tag);
  // console.log('slug', slug);
  // console.log('product', product);

  let manifest;
  if (tag) {
    // console.log('remote');
    manifest = await fetchRemoteDocsManifest(tag);
  } else {
    // console.log('local');
    manifest = await fetchLocalDocsManifest();
  }

  if (!manifest) {
    return { props: {}, notFound: true };
  }

  const route = manifest && findRouteByPath(slug, manifest.routes);

  if (!route) {
    return { props: {}, notFound: true };
  }

  let md;
  if (tag) {
    md = await getRawFileFromRepo(route.path!, currentTag);
  } else {
    md = await getRawFileFromLocal(route.path!);
  }

  const { content, data } = matter(md);

  const mdxSource = await serialize(content ?? '', {
    mdxOptions: {
      remarkPlugins,
      rehypePlugins: [[rehypeDocs as any, { filePath: route.path!, tag }]],
    },
  });
  return {
    props: {
      route,
      routes: manifest.routes,
      page: {
        mdxSource,
        ...data,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const manifest = await fetchLocalDocsManifest();
  return {
    paths: getPaths([...manifest.routes]),
    fallback: 'blocking',
  };
};
