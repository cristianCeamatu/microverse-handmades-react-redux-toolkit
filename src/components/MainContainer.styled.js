import styled from 'styled-components';

export const MainContainer = styled.main`
  transition: 0.1s ease-in;
  position: relative;
  box-shadow: 0px 0px 20px 1px #000000;
  left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '270px' : '0')};
`;
