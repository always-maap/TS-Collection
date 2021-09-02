import dynamic from 'next/dynamic';
import * as React from 'react';

export default {
  // default tags
  pre: (p: any) => <div {...p} />,
  code: dynamic(() => import('./Highlight2')),
  // Counter: dynamic(() => import('./counter')),
};
