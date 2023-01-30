import styled from 'styled-components';

export const PriceBox = styled.div`
  font-weight: bold;
  margin-top: 60px;
`;

export const Price = styled.p`
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 5px;

  span {
    color: orange;
    margin-left: 10px;
    font-size: 15px;
    background-color: #ffefdf;
    border-radius: 5px;
    padding: 3px;
  }
`;

export const OriginalPrice = styled.p`
  margin-top: 0;
  margin-left: 2px;
  color: #d1d1d1;
  text-decoration: line-through;
`;
