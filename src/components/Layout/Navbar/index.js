import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBars, FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

// Styles
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavLink,
  SpecialLink,
  MobileIcon,
  DownloadLink,
} from './NavElements';
// Assets
import logo from '../../../assets/logo.png';

const Navbar = ({ toggle, sidebarIsOpen }) => {
  // State
  const loggedIn = useSelector(state => state.user.loggedIn);

  const [scrolled, setScrolled] = useState(false);

  // Effects
  document.addEventListener('scroll', () => {
    const scrolledY = document.scrollingElement.scrollTop;
    if (scrolledY > 80 && !scrolled) {
      setScrolled(true);
    } else if (scrolledY < 80 && scrolled) {
      setScrolled(false);
    }
  });

  return (
    <>
      <Nav sidebarIsOpen={sidebarIsOpen} scrolled={scrolled}>
        <NavContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavLogo to="/">
            <img src={logo} alt="Company brand logo" width="40" />
            Crafts
          </NavLogo>

          <NavMenu>
            {loggedIn ? (
              <>
                <li>
                  <DownloadLink to="/">Download Application</DownloadLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <DownloadLink to="/">Download Application</DownloadLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/sign_up">
                    <SpecialLink>Sign up</SpecialLink>
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <MobileIcon>
                <FaSearch />
              </MobileIcon>
            </li>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
};

export default Navbar;
