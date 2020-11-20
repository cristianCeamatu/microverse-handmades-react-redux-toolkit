import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.section`
  margin: 30px 5px;
  text-align: center;

  header {
    margin-bottom: 30px;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.625rem;
      font-weight: bold;
      color: #919191;
      text-transform: uppercase;
    }
  }

  .image,
  .details {
    padding: 0 60px;
  }

  .details {
    h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.725rem;
      line-height: 1.3;
      margin-bottom: 10px;
    }
  }
`;
export const Button = styled(Link)`
  border-radius: 50px;
  padding: 5px 20px;
  background: rgb(233, 84, 6);
  margin-right: 10px;
  font-size: 0.675rem;
  color: #fff;
`;
