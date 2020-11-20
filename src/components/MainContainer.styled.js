import styled from 'styled-components';

export const MainContainer = styled.main`
  position: relative;
  transition: 0.3s ease-in-out;
  left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '270px' : '0')};
`;
