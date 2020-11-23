import { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import MobileNavbar from './Navbar/MobileNavbar';
import Sidebar from './Sidebar';

// Styles
import { MainContainer } from '../Styles.styled';

const MobileLayout = ({ children, productPage, title }) => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  // Effects
  const toggle = () => setIsOpen(isOpen => !isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <MobileNavbar
          sidebarIsOpen={isOpen}
          toggle={toggle}
          productPage={productPage}
          title={title}
        />
        {children}
      </MainContainer>
    </>
  );
};

MobileLayout.propTypes = {
  productPage: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MobileLayout;
