import { useState } from 'react';
// Components
import MobileNavbar from '../components/Navbar/MobileNavbar';
import Flash from '../components/Flash';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// Styles
import { MainContainer } from '../components/MainContainer.styled';

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
        <Flash />
        <Footer />
      </MainContainer>
    </>
  );
};

export default MobileLayout;
