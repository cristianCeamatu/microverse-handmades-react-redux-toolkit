import { useSelector, useDispatch } from 'react-redux';
import { FaBars } from 'react-icons/fa';
// Components
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  MobileIcon,
  NavItem,
  NavLink,
  SpecialLink,
} from './NavElements';
// Actions
import { logout } from '../../features/user/userSlice';
// Assets
import logo from '../../assets/logo.png';

const Navbar = () => {
  // State
  const loggedIn = useSelector((state) => state.user.loggedIn);
  // Effects
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <img src={logo} alt="Company brand logo" />
          </NavLogo>

          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {loggedIn ? (
              <NavItem>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <a href="/" onClick={handleLogout}>
                  Logout
                </a>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink to="/">Download Application</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/sign_up">
                    <SpecialLink>Sign up</SpecialLink>
                  </NavLink>
                </NavItem>
              </>
            )}
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
