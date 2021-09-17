import dynamic from 'next/dynamic';

export default {
  pre: (p: any) => <div {...p} />,
  code: dynamic(() => import('./Code')),
};
