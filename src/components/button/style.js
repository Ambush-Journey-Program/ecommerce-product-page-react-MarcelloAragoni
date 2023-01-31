import styled, { css } from 'styled-components';

const addCartButton = css`
  padding: 0;
  padding-left: 30px;
  padding-right: 35px;
  color: #ffffff;
  background-color: #ec823e;

  svg {
    margin-right: 1rem;
    path {
      fill: #ffffff;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  border-width: 0px;
  font-weight: bold;
  background-repeat: no-repeat;
  background-position: center;
  color: #ec823e;
  background-color: #f7f8fd;
  cursor: pointer;

  ${({ addcart }) => addcart && addCartButton}
`;
