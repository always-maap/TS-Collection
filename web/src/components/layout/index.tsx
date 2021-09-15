import { FC } from 'react';
import Sticky from '../Sticky';
import { useIsMobile } from '../useIsMobile';
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
