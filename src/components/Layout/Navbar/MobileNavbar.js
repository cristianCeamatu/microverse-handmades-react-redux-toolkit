import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBars, FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

// Styles
import {
  Nav,
  NavContainer,
  NavMenu,
  NavLink,
  SpecialLink,
  MobileIcon,
  DownloadLink,
  ProfileAvatar,
} from './NavElements';

const MobileNavbar = ({ toggle, sidebarIsOpen, productPage, title }) => {
  // State
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const productName = useSelector((state) => state.catalog.product.name);
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
      <Nav sidebarIsOpen={sidebarIsOpen} scrolled={scrolled} mobileView={true}>
        <NavContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <h3>{productName && productPage ? productName : title}</h3>

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

MobileNavbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
  productPage: PropTypes.bool,
  title: PropTypes.string,
};

export default MobileNavbar;
