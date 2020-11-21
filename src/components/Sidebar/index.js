import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { logout } from '../../features/user/userSlice';
// Styles
import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
  SidebarLogo,
  SidebarProfile,
  SpecialLink,
  AnchorLink,
  Divider,
} from './SidebarElements';
// Assets
import logo from '../../assets/logo.png';

const Sidebar = ({ isOpen, toggle }) => {
  // State
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const user = useSelector((state) => state.user.user);

  // Effects
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  // Utils
  const { name, nickname } = user;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {loggedIn ? (
        <>
          <SidebarProfile>
            <img
              src="http://unsplash.it/100/100?gravity=center"
              alt="Random unsplash img"
              width="50"
              height="50"
            />
            <h3>{name}</h3>
            <p>@{nickname}</p>
          </SidebarProfile>

          <SidebarMenu>
            <SidebarItem>
              <SidebarLink to="/dashboard">Dashboard</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/login">
                Notifications <span>6</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/login">
                Messages <span>2</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/">Friends</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/">Statistic</SidebarLink>
            </SidebarItem>
          </SidebarMenu>

          <Divider />
          <SidebarMenu>
            <SidebarItem>
              <SidebarLink to="/login">Help</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <AnchorLink onClick={handleLogout}>Logout</AnchorLink>
            </SidebarItem>
          </SidebarMenu>
        </>
      ) : (
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/login">Login</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SpecialLink to="/sign_up">Sign up</SpecialLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/">Download Application</SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      )}
      <SidebarLogo to="/">
        <img src={logo} alt="Company brand logo" width="50" />
        Crafts
      </SidebarLogo>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
