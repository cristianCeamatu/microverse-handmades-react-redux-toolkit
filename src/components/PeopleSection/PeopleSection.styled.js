import styled from 'styled-components';

export const Container = styled.section`
  padding: 30px 5px;
  text-align: center;

  .details {
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

  .articles {
    /* display: flex;
    align-items: center;
    justify-content: center; */

    article {
      margin: 0 10px;
      padding: 15px 10px;
      border: 1px solid rgba(0, 0, 0, 0.09);
      -webkit-box-shadow: 0px 0px 10px -5px #000000;
      box-shadow: 0px 0px 10px -5px #000000;

      &:first-child {
        margin-bottom: 15px;
      }

      img {
        border-radius: 50px;
      }

      h4 {
        font-size: 1.1rem;
        color: #212121;
        line-height: 1;
      }

      .username {
        font-size: 0.75rem;
        margin-bottom: 10px;
        color: #919191;
      }

      .text {
        line-height: 1.1;
        font-size: 0.875rem;
        padding: 0 15px;
      }
    }
  }
`;
