import styled from 'styled-components';
import { Link } from 'react-router-dom';

import background from '../assets/showcase.jpg';

export const MainContainer = styled.main`
  transition: 0.1s ease-in;
  position: relative;
  box-shadow: 0px 0px 20px 1px #000000;
  left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '270px' : '0')};
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  background-image: linear-gradient(
      rgba(256, 256, 256, 0.85),
      rgba(256, 256, 256, 0.85)
    ),
    url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .wrapper {
    margin: 0 auto;
    max-width: 300px;

    header {
      padding-top: 30px;
      margin-bottom: 15px;

      h1 {
        font-size: 2rem;
        font-weight: normal;
        margin-bottom: 10px;
      }

      p {
        padding: 0 30px;
      }
    }

    footer {
      padding-top: 15px;
      display: flex;
      justify-content: center;
      color: #919191;
    }
  }

  @media screen and (min-width: 768px) {
    .wrapper {
      padding-top: 60px;
    }
  }
`;

export const MobileContainer = styled.main`
  padding: 60px 15px 15px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  font-size: 0.75rem;
`;

export const Form = styled.form`
  input {
    padding: 8px 30px;
    border-radius: 50px;
    margin: 10px auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 0.75rem;

    &:focus,
    &:active {
      outline: none;
    }
  }

  button {
    cursor: pointer;
    border-radius: 50px;
    margin-top: 10px;
    padding: 5px 20px;
    background: rgb(233, 84, 6);
    margin-right: 10px;
    font-size: 0.75rem;
    text-shadow: none;
    color: #fff;
    outline: none;
    border: none;
  }
`;
