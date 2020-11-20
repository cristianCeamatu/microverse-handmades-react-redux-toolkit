import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: transparent;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  padding: 3px;
  top: 0;
  text-transform: uppercase;
  z-index: 10;
  font-weight: bold;
`;

export const NavContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.625rem;
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  width: 100px;
  display: flex;
  align-items: center;
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

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ProfileAvatar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  img {
    border-radius: 50%;
  }
`;
