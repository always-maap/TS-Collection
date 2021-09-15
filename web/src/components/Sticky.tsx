import cn from 'classnames';
import { FC } from 'react';

export interface StickyProps {
  offset?: number;
  shadow?: boolean;
  className?: string;
}

export const Sticky: FC<StickyProps> = ({ offset, children, shadow }) => {
  return (
    <div style={{ top: offset || 0 }} className={cn({ shadow }, 'z-10')}>
      {children}

      <style jsx>{`
        div {
          background: #fff;
          position: sticky;
        }
        div.shadow {
          box-shadow: rgba(0, 0, 0, 0.06) 0 6px 20px;
        }
      `}</style>
    </div>
  );
};

export default Sticky;
