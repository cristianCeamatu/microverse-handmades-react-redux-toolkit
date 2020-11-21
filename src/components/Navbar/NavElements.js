import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  /* background: ; */
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  font-weight: bold;
  transition: 0.1s ease-in;
  left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '270px' : '0')};
  background: ${({ scrolled, mobileView }) =>
    scrolled && !mobileView ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
  color: ${({ mobileView }) => (mobileView ? '#565656' : '#fff')};
  padding: ${({ mobileView }) => (mobileView ? '10px 0' : '3px')};
  text-transform: ${({ mobileView }) => (mobileView ? 'none' : 'uppercase')};
`;

export const NavContainer = styled.div`
  background-color: transparent;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.625rem;
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  padding: 2px;
  color: #fff;
  font-size: 1.6rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0 0.6rem;
  font-size: 0.825rem;
`;

export const DownloadLink = styled(NavLink)`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SpecialLink = styled.span`
  background-color: rgb(119, 120, 118);
  border-radius: 60px;
  padding: 0.3rem 1.5rem;
  align-self: center;
  justify-content: center;
  font-size: 0.825rem;
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 5px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ProfileAvatar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 50%;
  }
`;
