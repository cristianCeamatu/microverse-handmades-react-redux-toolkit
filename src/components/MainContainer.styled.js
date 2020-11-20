import styled from 'styled-components';

export const MainContainer = styled.main`
  transition: 0.1s ease-in;
  position: relative;
  left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '270px' : '0')};
`;
