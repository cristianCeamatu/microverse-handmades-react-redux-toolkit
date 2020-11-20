import styled from 'styled-components';

export const MainContainer = styled.main`
  transition: 0.3s ease-in-out;
  position: relative;
  left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '270px' : '0')};
`;
