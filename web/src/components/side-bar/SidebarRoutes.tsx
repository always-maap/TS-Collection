import { addTagToSlug, getSlug, removeFromLast } from 'lib/docs/utils';
import { RouteItem } from 'lib/types';
import { useRouter } from 'next/router';
import { FC } from 'react';
import SidebarCategory from './SidebarCategory';
import SidebarHeading from './SidebarHeading';
import SidebarPost from './SidebarPost';

type Props = {
  routes: RouteItem[];
  isMobile?: boolean;
  level?: number;
};

function getCategoryPath(routes: RouteItem[]) {
  const route = routes.find((r) => r.path);
  return route && removeFromLast(route.path!, '/');
}

const SidebarRoutes: FC<Props> = (props) => {
  const { routes: currentRoutes, isMobile, level } = props;
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
};

export default SidebarRoutes;
