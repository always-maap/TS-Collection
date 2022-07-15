const config = {
  projectLink: 'https://github.com/always-maap/ts-collection',
  docsRepositoryBase: 'https://github.com/always-maap/TS-Collection/tree/master/docs',
  titleSuffix: ' – Nextra',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: false,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span className="sr-only">Home</span>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">💮 TS-Collection</span>
      </div>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
};

export default config;
