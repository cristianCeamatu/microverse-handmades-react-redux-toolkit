import styled from 'styled-components';
import { Link } from 'react-router-dom';

import background from '../assets/showcase.jpg';

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
      padding-top: 90px;
      margin-bottom: 60px;

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
      padding-top: 120px;
      display: flex;
      justify-content: center;
      color: #919191;
    }
  }
`;

export const Button = styled(Link)``;
