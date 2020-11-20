import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.footer`
  padding: 45px 5px;
  text-align: center;

  address {
    margin-top: 30px;
    font-size: 0.875rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      padding: 0 10px;

      & > :first-child {
        font-size: 2rem;
        margin: 15px auto;
        color: rgb(233, 84, 6);
      }
    }
  }
`;
export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 30px auto 0;
  padding: 5px;
  border-radius: 5px;
  max-width: 100px;
  background-color: rgb(0, 0, 0, 0.2);
  box-shadow: 0px 0px 3px rgb(233, 84, 6);
`;
