import styled from 'styled-components';

export const ProductAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 445px;
  margin: 0 auto;

  .button--add {
    width: 272px;
    height: 56px;
    justify-content: center;
  }
`;

export const ProductAmount = styled.div`
  display: flex;
  flex-direction: row;
  width: 157px;
  height: 56px;

  .button--minus {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    height: 56px;
  }

  .button--plus {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    height: 56px;
  }
`;
