import { useSelector, useDispatch } from 'react-redux';
// Actions
import { logout } from '../../features/user/userSlice';
// Styles
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';

const Sidebar = () => {
  // State
  const loggedIn = useSelector((state) => state.user.loggedIn);
  // Effects
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      {/* <SidebarWrapper>
        <SidebarMenu>
          {loggedIn ? (
            <SidebarItem>
              <SidebarLink to="/dashboard">Dashboard</SidebarLink>
              <a href="/" onClick={handleLogout}>
                Logout
              </a>
            </SidebarItem>
          ) : (
            <>
              <SidebarItem>
                <SidebarLink to="/">Download Application</SidebarLink>
              </SidebarItem>
              <SidebarItem>
                <SidebarLink to="/login">Login</SidebarLink>
              </SidebarItem>
              <SidebarItem>
                <SidebarLink to="/sign_up">
                  <SpecialLink>Sign up</SpecialLink>
                </SidebarLink>
              </SidebarItem>
            </>
          )}
        </SidebarMenu>
      </SidebarWrapper> */}
    </SidebarContainer>
  );
};

export default Sidebar;
