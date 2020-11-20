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
  ProfileAvatar,
} from './NavElements';
// Assets
import logo from '../../assets/logo.png';

const Navbar = ({ toggle, sidebarIsOpen }) => {
  // State
  const loggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <>
      <Nav sidebarIsOpen={sidebarIsOpen}>
        <NavContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavLogo to="/">
            <img src={logo} alt="Company brand logo" width="100" />
          </NavLogo>

          <MobileIcon>
            <FaSearch />
          </MobileIcon>

          <NavMenu>
            {loggedIn ? (
              <>
                <li>
                  <DownloadLink to="/">Download Application</DownloadLink>
                </li>
                <li>
                  <NavLink to="/products">Crafts</NavLink>
                </li>
                <li>
                  <ProfileAvatar onClick={toggle}>
                    <img
                      src="http://unsplash.it/30/30?gravity=center"
                      alt="Random unsplash img"
                      width="30"
                      height="30"
                    />
                  </ProfileAvatar>
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
