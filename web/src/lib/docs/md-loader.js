const fm = require('gray-matter');

module.exports = async function (src) {
  const callback = this.async();
  const { content, data } = fm(src);
  const layout = data.layout || 'Docs';
  const code =
    `import { Layout${layout} } from 'components/Layout${layout}';

export default function Wrapper ({ children, ...props }) { return (
  <Layout${layout} meta={${JSON.stringify(data)}} {...props}>{children}</Layout${layout}>
);
}


` + content;

  return callback(null, code);
};
