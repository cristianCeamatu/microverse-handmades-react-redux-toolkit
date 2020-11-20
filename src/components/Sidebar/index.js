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
              <div>
                <SidebarLink to="/login">Notifications</SidebarLink>
                <span>6</span>
              </div>
            </SidebarItem>
            <SidebarItem>
              <div>
                <SidebarLink to="/login">Messages</SidebarLink>
                <span>2</span>
              </div>
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
              <SidebarLink to="/sign_up">
                <SpecialLink onClick={handleLogout}>Logout</SpecialLink>
              </SidebarLink>
            </SidebarItem>
          </SidebarMenu>
        </>
      ) : (
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/login">Login</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/sign_up">
              <SpecialLink>Sign up</SpecialLink>
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/">Download Application</SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      )}
      <SidebarLogo to="/">
        <img src={logo} alt="Company brand logo" width="150" />
      </SidebarLogo>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
