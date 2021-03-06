import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
// Actions
import { logout } from '../../../features/user/userSlice';
// Assets
import logo from '../../../assets/logo.png';
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
  PlusIcon,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  // State
  const loggedIn = useSelector(state => state.user.loggedIn);
  const user = useSelector(state => state.user.user);
  const craftsCount = useSelector(state => state.catalog.products.length);
  const createdCount = useSelector(
    state => state.catalog.products.filter(product => product.user_id === user.id).length,
  );

  /* eslint-disable max-len */
  const favorited = useSelector(state => state.catalog.products.filter(product => product.favorited_by.some(favorite => favorite.id === user.id)));
  const favoritedCount = favorited.length;

  // Effects
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
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
            <p>
              @
              {nickname}
            </p>
          </SidebarProfile>

          <SidebarMenu>
            <SidebarItem>
              <SidebarLink to="/dashboard">
                Add craft
                {' '}
                <PlusIcon />
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/products">
                Crafts
                {' '}
                <span>{craftsCount}</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/creations">
                My creations
                {' '}
                <span>{createdCount}</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/favorites">
                My favorites
                {' '}
                <span>{favoritedCount}</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/account">Account</SidebarLink>
            </SidebarItem>
          </SidebarMenu>

          <Divider />
          <SidebarMenu>
            <SidebarItem>
              <SidebarLink to="/help">Help</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <AnchorLink onClick={handleLogout}>Logout</AnchorLink>
            </SidebarItem>
          </SidebarMenu>
        </>
      ) : (
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/products">Crafts</SidebarLink>
          </SidebarItem>
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
