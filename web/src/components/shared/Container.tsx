import cn from 'classnames';
import { FC } from 'react';

export const Container: FC = (props) => {
  return <div className={cn('container mx-auto')} {...props} />;
};

export default Container;
