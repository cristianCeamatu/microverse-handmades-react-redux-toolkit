import styled from 'styled-components';

export const Form = styled.form`
  input {
    padding: 8px 30px;
    border-radius: 50px;
    margin: 10px auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 0.875rem;

    &:focus,
    &:active {
      outline: none;
    }
  }

  button {
    border-radius: 50px;
    margin-top: 10px;
    padding: 5px 20px;
    background: rgb(233, 84, 6);
    margin-right: 10px;
    font-size: 0.875rem;
    text-shadow: none;
    color: #fff;
    outline: none;
    border: none;
  }
`;
