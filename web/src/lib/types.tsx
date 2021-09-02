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

/*
export const routes: Routes = {
  routes: [
    {
      title: 'Documentation',
      heading: true,
      routes: [
        { title: 'Getting Started', path: '/docs/getting-started.md' },
        {
          title: 'Basic Features',
          open: true,
          routes: [
            {
              title: 'Pages',
              path: '/docs/basic-features/pages.md',
            },
            {
              title: 'Data fetching',
              path: '/docs/basic-features/data-fetching.md',
            },
            {
              title: 'Built-in CSS Support',
              path: '/docs/basic-features/built-in-css-support.md',
            },
            {
              title: 'Static File Serving',
              path: '/docs/basic-features/static-file-serving.md',
            },
            {
              title: 'TypeScript',
              path: '/docs/basic-features/typescript.md',
            },
          ],
        },
        {
          title: 'Routing',
          routes: [
            {
              title: 'Introduction',
              path: '/docs/routing/introduction.md',
            },
            {
              title: 'Dynamic Routes',
              path: '/docs/routing/dynamic-routes.md',
            },
            {
              title: 'Imperatively',
              path: '/docs/routing/imperatively.md',
            },
            {
              title: 'Shallow Routing',
              path: '/docs/routing/shallow-routing.md',
            },
          ],
        },
        {
          title: 'API Routes',
          routes: [
            {
              title: 'Introduction',
              path: '/docs/api-routes/introduction.md',
            },
            {
              title: 'Dynamic API Routes',
              path: '/docs/api-routes/dynamic-api-routes.md',
            },
            {
              title: 'API Middlewares',
              path: '/docs/api-routes/api-middlewares.md',
            },
            {
              title: 'Response Helpers',
              path: '/docs/api-routes/response-helpers.md',
            },
          ],
        },
        {
          title: 'Deployment',
          path: '/docs/deployment.md',
        },
        {
          title: 'Advanced Features',
          routes: [
            {
              title: 'Preview Mode',
              path: '/docs/advanced-features/preview-mode.md',
            },
            {
              title: 'Dynamic Import',
              path: '/docs/advanced-features/dynamic-import.md',
            },
            {
              title: 'Automatic Static Optimization',
              path: '/docs/advanced-features/automatic-static-optimization.md',
            },
            {
              title: 'Static HTML Export',
              path: '/docs/advanced-features/static-html-export.md',
            },
            {
              title: 'AMP Support',
              routes: [
                {
                  title: 'Introduction',
                  path: '/docs/advanced-features/amp-support/introduction.md',
                },
                {
                  title: 'Adding AMP Components',
                  path:
                    '/docs/advanced-features/amp-support/adding-amp-components.md',
                },
                {
                  title: 'AMP Validation',
                  path: '/docs/advanced-features/amp-support/amp-validation.md',
                },
                {
                  title: 'AMP in Static HTML export',
                  path:
                    '/docs/advanced-features/amp-support/amp-in-static-html-export.md',
                },
                {
                  title: 'TypeScript',
                  path: '/docs/advanced-features/amp-support/typescript.md',
                },
              ],
            },
            {
              title: 'Customizing Babel Config',
              path: '/docs/advanced-features/customizing-babel-config.md',
            },
            {
              title: 'Customizing PostCSS Config',
              path: '/docs/advanced-features/customizing-postcss-config.md',
            },
            {
              title: 'Custom Server',
              path: '/docs/advanced-features/custom-server.md',
            },
            {
              title: 'Custom `App`',
              path: '/docs/advanced-features/custom-app.md',
            },
            {
              title: 'Custom `Document`',
              path: '/docs/advanced-features/custom-document.md',
            },
            {
              title: 'Custom Error Page',
              path: '/docs/advanced-features/custom-error-page.md',
            },
            {
              title: '`src` Directory',
              path: '/docs/advanced-features/src-directory.md',
            },
            {
              title: 'Multi Zones',
              path: '/docs/advanced-features/multi-zones.md',
            },
          ],
        },
        {
          title: 'Upgrade Guide',
          path: '/docs/upgrading.md',
        },
        { title: 'FAQ', path: '/docs/faq.md' },
      ],
    },
    {
      title: 'API Reference',
      heading: true,
      routes: [
        { title: 'CLI', path: '/docs/api-reference/cli.md' },
        {
          title: 'next/router',
          path: '/docs/api-reference/next/router.md',
        },
        {
          title: 'next/link',
          path: '/docs/api-reference/next/link.md',
        },
        {
          title: 'next/head',
          path: '/docs/api-reference/next/head.md',
        },
        {
          title: 'next/amp',
          path: '/docs/api-reference/next/amp.md',
        },
        {
          title: 'Data Fetching',
          routes: [
            {
              title: 'getInitialProps',
              path: '/docs/api-reference/data-fetching/getInitialProps.md',
            },
          ],
        },
        {
          title: 'next.config.js',
          routes: [
            {
              title: 'Introduction',
              path: '/docs/api-reference/next.config.js/introduction.md',
            },
            {
              title: 'Environment Variables',
              path:
                '/docs/api-reference/next.config.js/environment-variables.md',
            },
            {
              title: 'Custom Page Extensions',
              path:
                '/docs/api-reference/next.config.js/custom-page-extensions.md',
            },
            {
              title: 'CDN Support with Asset Prefix',
              path:
                '/docs/api-reference/next.config.js/cdn-support-with-asset-prefix.md',
            },
            {
              title: 'Build Target',
              path: '/docs/api-reference/next.config.js/build-target.md',
            },
            {
              title: 'Custom Webpack Config',
              path:
                '/docs/api-reference/next.config.js/custom-webpack-config.md',
            },
            {
              title: 'Compression',
              path: '/docs/api-reference/next.config.js/compression.md',
            },
            {
              title: 'Static Optimization Indicator',
              path:
                '/docs/api-reference/next.config.js/static-optimization-indicator.md',
            },
            {
              title: 'Runtime Configuration',
              path:
                '/docs/api-reference/next.config.js/runtime-configuration.md',
            },
            {
              title: 'Disabling x-powered-by',
              path:
                '/docs/api-reference/next.config.js/disabling-x-powered-by.md',
            },
            {
              title: 'Disabling ETag Generation',
              path:
                '/docs/api-reference/next.config.js/disabling-etag-generation.md',
            },
            {
              title: 'Setting a custom build directory',
              path:
                '/docs/api-reference/next.config.js/setting-a-custom-build-directory.md',
            },
            {
              title: 'Configuring the Build ID',
              path:
                '/docs/api-reference/next.config.js/configuring-the-build-id.md',
            },
            {
              title: 'Configuring onDemandEntries',
              path:
                '/docs/api-reference/next.config.js/configuring-onDemandEntries.md',
            },
            {
              title: 'Ignoring TypeScript Errors',
              path:
                '/docs/api-reference/next.config.js/ignoring-typescript-errors.md',
            },
            {
              title: 'exportPathMap',
              path: '/docs/api-reference/next.config.js/exportPathMap.md',
            },
          ],
        },
      ],
    },
  ],
};
 */
