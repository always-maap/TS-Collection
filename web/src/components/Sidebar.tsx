import cn from 'classnames';
import { FC } from 'react';

type Props = {
  active?: boolean;
  fixed?: boolean;
};

export const Sidebar: FC<Props> = (props) => {
  const { active, fixed, children } = props;

  return (
    <aside
      className={cn('sidebar bg-white top-24 flex-shrink-0 pr-2', {
        active,
        ['pb-0 flex flex-col z-1 sticky']: fixed,
        fixed,
      })}
    >
      <div className="sidebar-content overflow-y-auto pb-4">{children}</div>
      <style jsx>{`
        .sidebar {
          -webkit-overflow-scrolling: touch;
        }
        .sidebar.fixed {
          width: 300px;
          padding-right: 2.5rem;
          /* Full page - content margin - header size - banner */
          height: calc(100vh - 1.5rem - 64px - 42px);
        }
        .sidebar-search {
          position: relative;
          z-index: 1;
        }
        @media screen and (max-width: 1024px) {
          .sidebar,
          .sidebar.fixed {
            display: none;
          }
          .sidebar.active {
            display: block;
          }
        }
      `}</style>
    </aside>
  );
};
