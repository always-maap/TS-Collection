const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const visit = require('unist-util-visit');
const remarkPlugins = require('./src/lib/docs/remark-plugins');

try {
  fs.unlinkSync(path.resolve('.blog_index_data'));
} catch (_) {
  /* non fatal */
}
try {
  fs.unlinkSync(path.resolve('.blog_index_data_previews'));
} catch (_) {
  /* non fatal */
}

module.exports = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
  env: {
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID || '',
  },
  experimental: {
    plugins: true,
    rewrites() {
      return [
        {
          source: '/feed.xml',
          destination: '/_next/static/feed.xml',
        },
        {
          source: '/docs{/}?',
          destination: '/docs/overview',
        },
        {
          source: '/docs/tag/:tag{/}?',
          destination: '/docs/tag/:tag/overview',
        },
      ];
    },
  },
  webpack: (config, { dev, isServer, ...options }) => {
    config.module.rules.push(
      {
        test: /.mdx?$/, // load both .md and .mdx files
        use: [
          options.defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins,
            },
          },
          path.join(__dirname, './src/lib/docs/md-loader'),
        ],
      },
      { test: /\.svg$/, use: ['@svgr/webpack'] }
    );

    if (!dev && isServer) {
      // we're in build mode so enable shared caching for the GitHub API
      process.env.USE_CACHE = 'true';
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = { ...(await originalEntry()) };

        // These scripts can import components from the app and use ES modules
        // entries['./scripts/build-rss.js'] = './scripts/build-rss.js';
        // entries['./scripts/index-docs.js'] = './scripts/index-docs.js';

        return entries;
      };
    }

    return config;
  },
};
