import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  width: 30px;
  background-color: #f7f8fd;
  border: none;
  text-align: center;

  &.input__text--center {
    text-align: center;
  }

  &:focus-visible {
    outline: none;
  }
`;
