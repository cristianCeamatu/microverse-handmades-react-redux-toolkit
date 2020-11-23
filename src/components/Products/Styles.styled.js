import styled from 'styled-components';

export const ProductsContainer = styled.section`
  height: 80vh;
  max-height: 500px;
  display: grid;
  grid-template-columns: 1px 1fr 1px;
  & > * {
    grid-column: 2 / -2;
  }
  & > .full {
    grid-column: 1 / -1;
  }

  .slider {
    gap: 15px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ProductContainer = styled.article`
  width: 300px;
  max-width: 80%;
  height: 100%;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  border: 1px solid rgba(0, 0, 0, 0.15);

  .image {
    width: 300px;
    max-width: 100%;
    height: 85%;
    max-height: 500px;

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

export const SliderPaginationContainer = styled.div`
  font-weight: bold;
  word-spacing: 1px;
  text-align: center;
  margin-top: 10px;
`;
