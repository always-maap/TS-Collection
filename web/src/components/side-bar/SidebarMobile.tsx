import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import cn from 'classnames';
import Container from 'components/Container';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import { FiChevronRight as ArrowRightSidebar } from 'react-icons/fi';

const SidebarMobile: FC = (props) => {
  const { children } = props;

  const [opened, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const openMenu = () => {
    if (menuRef.current != null) {
      disableBodyScroll(menuRef.current);
      setOpen(true);
    }
  };

  const closeMenu = () => {
    if (menuRef.current != null) {
      enableBodyScroll(menuRef.current);
      setOpen(false);
    }
  };

  const toggleOpen = () => {
    if (opened) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const onRouteChange = () => {
    closeMenu();
  };

  useEffect(() => {
    onRouteChange();
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [router.asPath]);

  return (
    <div className="lg:hidden">
      <Container>
        <label htmlFor="dropdown-input" className={cn('w-full', { opened })}>
          <input
            id="dropdown-input"
            className="hidden"
            type="checkbox"
            checked={opened}
            onChange={toggleOpen}
          />
          <div className="docs-select flex w-full items-center">
            <ArrowRightSidebar className="text-gray-600 -ml-1" />
            Menu
          </div>
        </label>
        <div className="docs-dropdown shadow-xl" ref={menuRef}>
          <Container>
            <nav>{children}</nav>
          </Container>
        </div>
        <style jsx>{`
          .docs-select {
            display: flex;
            height: 2.5rem;
            width: 100%;
            line-height: 3rem;
            align-items: center;
            text-align: left;
            cursor: pointer;
          }
          .docs-dropdown {
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            bottom: 100%;
            background: white;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          .docs-dropdown nav {
            padding: 10px 0;
          }
          .opened ~ .docs-dropdown {
            min-height: 80px;
            bottom: calc(153px - 90vh);
            border-top: 1px solid #eaeaea;
          }
          .docs-select :global(svg) {
            margin-left: 1px;
            margin-right: 14px;
            transition: transform 0.15s ease;
          }
          .opened > .docs-select :global(svg) {
            transform: rotate(90deg);
          }

          @media screen and (max-width: 640px) {
            .opened ~ .docs-dropdown {
              bottom: calc(203px - 90vh);
            }
          }
        `}</style>
      </Container>
    </div>
  );
};

export default SidebarMobile;
