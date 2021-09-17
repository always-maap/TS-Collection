export interface RouteItem {
  title: string;
  path?: string;
  open?: boolean;
  heading?: boolean;
  routes?: RouteItem[];
}

export interface Routes {
  routes: RouteItem[];
}

export interface Page {
  id: string;
  mdxSource: any;
  title: string;
  toc: any;
  description?: string;
}

export interface Post {
  slug: string;
  content: string;
  title: string;
  date: string;
  author: string;
  toc: any;
  ogImage: {
    url: string;
  };
  coverImage: string;
}
