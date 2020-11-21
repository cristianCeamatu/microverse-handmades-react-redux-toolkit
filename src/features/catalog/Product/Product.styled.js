import styled from 'styled-components';

export const Container = styled.article`
  max-width: 300px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  border: 1px solid rgba(0, 0, 0, 0.15);

  .image {
    width: 100%;
    max-width: 300px;
    height: 350px;

    img {
      height: 100%;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    h3 {
      margin-bottom: -5px;
      font-size: 0.875rem;
    }

    p {
      font-size: 0.75rem;

      &:first-child {
        font-size: 0.875rem;
        font-weight: bold;
      }
    }
  }
`;
