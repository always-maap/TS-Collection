import { FC } from 'react';

type Props = {
  title: string;
};

const SidebarHeading: FC<Props> = (props) => {
  const { title, children } = props;

  return (
    <div className="heading">
      <h4>{title}</h4>
      <div>{children}</div>
      <style jsx>{`
        h4 {
          margin: 1.25rem 0;
          font-size: 1.2rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default SidebarHeading;
