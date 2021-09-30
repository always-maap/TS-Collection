export interface RouteItem {
  title: string;
  path?: string;
  open?: boolean;
  heading?: boolean;
  routes?: RouteItem[];
}
export interface Page {
  id: string;
  mdxSource: any;
  title: string;
  toc: any;
  description?: string;
}
