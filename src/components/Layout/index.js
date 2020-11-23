import { useState } from 'react';
// Components
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

// Styles
import { MainContainer } from '../Styles.styled';

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
        <Footer />
      </MainContainer>
    </>
  );
};

export default Layout;
