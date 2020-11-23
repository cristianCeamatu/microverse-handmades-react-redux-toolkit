import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft, FaBars, FaSearch } from 'react-icons/fa';
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
} from './NavElements';

const MobileNavbar = ({
  toggle, sidebarIsOpen, productPage, title,
}) => {
  // State
  const loggedIn = useSelector(state => state.user.loggedIn);
  const productName = useSelector(state => state.catalog.product.name);
  const [scrolled, setScrolled] = useState(false);
  const history = useHistory();

  // Effects
  document.addEventListener('scroll', () => {
    const scrolledY = document.scrollingElement.scrollTop;
    if (scrolledY > 80 && !scrolled) {
      setScrolled(true);
    } else if (scrolledY < 80 && scrolled) {
      setScrolled(false);
    }
  });
  const goBack = e => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      <Nav sidebarIsOpen={sidebarIsOpen} scrolled={scrolled} mobileView>
        <NavContainer>
          {productPage ? (
            <MobileIcon onClick={goBack}>
              <FaArrowLeft />
            </MobileIcon>
          ) : (
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          )}
          <h3>{productName && productPage ? productName : title}</h3>
          <MobileIcon className="search">
            <FaSearch />
          </MobileIcon>
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
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

MobileNavbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
  productPage: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default MobileNavbar;
