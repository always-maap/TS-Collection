import { useState, useEffect, FC, Fragment } from 'react';

const VisuallyHidden: FC = (props) => {
  const { children } = props;
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = (ev) => {
        if (ev.key === 'Alt') {
          setForceShow(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <span
      style={{
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        height: 1,
        width: 1,
        margin: -1,
        padding: 0,
        border: 0,
      }}
    >
      {children}
    </span>
  );
};

export default VisuallyHidden;
