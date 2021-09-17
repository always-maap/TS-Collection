import { FC } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import Sticky from '../shared/Sticky';
import Footer from './Footer';
import Nav from './Nav';

const Layout: FC = (props) => {
  const { children } = props;
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <Nav />
      ) : (
        <Sticky>
          <Nav />
        </Sticky>
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
