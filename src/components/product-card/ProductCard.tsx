import PriceTag from '../price-tag';
import ProductAmount from '../product-amount';

import * as S from './style';

export default function ProductCard() {
  return (
    <S.ProductDetail>
      <S.Title>Sneaker Company</S.Title>
      <S.SubTitle>Fall Limited Edition Sneakers</S.SubTitle>
      <S.Description>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they’ll withstand everything the weather can offer.
      </S.Description>
      <PriceTag originalPrice={250} discount={20} />
      <ProductAmount />
    </S.ProductDetail>
  );
}
