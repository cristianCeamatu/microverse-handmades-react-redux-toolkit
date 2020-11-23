import { useState } from 'react';
// Components
import MobileNavbar from './Navbar/MobileNavbar';
import Sidebar from './Sidebar';

// Styles
import { MainContainer } from '../Styles.styled';

const MobileLayout = ({ children }) => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  // Effects
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <MobileNavbar sidebarIsOpen={isOpen} toggle={toggle} />
        {children}
      </MainContainer>
    </>
  );
};

export default MobileLayout;
