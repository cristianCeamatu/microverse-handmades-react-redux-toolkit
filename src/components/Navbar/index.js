import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaSearch } from 'react-icons/fa';
// Actions
import { logout } from '../../features/user/userSlice';
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
          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavLogo to="/">
            <img src={logo} alt="Company brand logo" />
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
                  <ProfileAvatar>
                    <img
                      src="http://unsplash.it/100/100?gravity=center"
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

export default Navbar;
