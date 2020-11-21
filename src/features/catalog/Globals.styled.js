import styled from 'styled-components';

export const ProductsContainer = styled.section`
  /* display: flex;
  padding-top: 5px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 30px; */
  display: grid;
  grid-template-columns: 20px 1fr 20px;

  & > * {
    grid-column: 2 / -2;
  }

  & > .full {
    grid-column: 1 / -1;
  }

  .slider {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    overflow-x: scroll;
    overflow-y: hidden;

    gap: 30px;
    display: flex;
  }
`;

export const SliderPaginationContainer = styled.div`
  font-weight: bold;
  word-spacing: 1px;
  text-align: center;
  margin-top: 15px;
`;
