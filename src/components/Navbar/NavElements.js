import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: gray;
  font-size: 1rem;
  margin-top: -80px;
  height: 80px;
  position: sticky;
  top: 0;
  text-transform: uppercase;
  z-index: 10;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease-in-out;
  }
`;

export const NavContainer = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 80px;
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  width: 100px;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  img {
    max-width: 100%;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid rgba(233, 84, 6, 0.8);
  }
`;

export const SpecialLink = styled.span`
  background-color: rgb(119, 120, 118);
  border-radius: 60px;
  padding: 0.3rem 1.5rem;
  align-self: center;
  justify-content: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    /* position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%); */
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
