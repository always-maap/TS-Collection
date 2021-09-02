import cn from 'classnames';
import * as React from 'react';
import { FC } from 'react';

export const Container: FC = (props) => {
  return <div className={cn('container mx-auto')} {...props} />;
};

Container.displayName = 'Container';
