import { useState } from 'react';
// Components
import Navbar from '../components/Navbar';
import Flash from '../components/Flash';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// Styles
import { MainContainer } from '../components/MainContainer.styled';

const Layout = ({ children }) => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  // Effects
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <Navbar sidebarIsOpen={isOpen} toggle={toggle} />
        {children}
        <Flash />
        <Footer />
      </MainContainer>
    </>
  );
};

export default Layout;
