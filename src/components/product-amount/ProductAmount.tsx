import { useState } from 'react';
import Input from '../input/';
import Button from '../button/';

import * as S from './style';

export default function ProductAmount() {
  const [amountValue, setAmount] = useState(0);

  function handleButtonPlusClick() {
    setAmount(amountValue + 1);
  }

  function handleButtonMinusClick() {
    setAmount(amountValue - 1);
  }

  function handleChangeInput(value: string) {
    setAmount(Number(value));
  }

  return (
    <S.ProductAmountContainer>
      <S.ProductAmount>
        <Button className="button--minus" onClick={handleButtonMinusClick} icon="minus" />
        <Input placeholder="0" inputValue={amountValue} setValue={handleChangeInput} />
        <Button className="button--plus" onClick={handleButtonPlusClick} icon="plus" />
      </S.ProductAmount>
      <Button className="button--add" addcart="addcart" icon="add">
        Add to Cart
      </Button>
    </S.ProductAmountContainer>
  );
}
