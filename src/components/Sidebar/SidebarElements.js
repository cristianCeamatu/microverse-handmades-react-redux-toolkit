import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  padding: 30px 0;
  z-index: 999;
  width: 250px;
  height: 100%;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  background: #fafafa;
`;

export const SidebarLogo = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 30px 10px 0;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(0, 0, 0, 0.2);
  box-shadow: 0px 0px 3px rgb(233, 84, 6);
`;
export const SidebarProfile = styled.div`
  padding: 25px;
  margin-bottom: 30px;

  img {
    border-radius: 50%;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 0.875rem;
  }

  p {
    font-size: 0.75rem;
    color: gray;
  }
`;
export const SidebarMenu = styled.div``;
export const SidebarItem = styled.div`
  padding: 5px 25px;
  cursor: pointer;

  &.active,
  &:hover {
    border-left: 3px solid rgb(233, 84, 6);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    background-color: rgb(233, 84, 6);
    color: #fff;
    font-size: 0.625rem;
    padding: 0 12px;
    border-radius: 50px;
  }
`;
export const Divider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 15px 25px;
`;
export const SidebarLink = styled(Link)`
  font-size: 0.825rem;
`;
export const SpecialLink = styled(Link)`
  color: red;
  font-size: 0.825rem;
  cursor: pointer;
`;
