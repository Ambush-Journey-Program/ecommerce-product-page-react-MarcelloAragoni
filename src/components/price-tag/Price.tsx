import * as S from './style';

type PriceProps = {
  originalPrice: number;
  discount: number;
};

export default function PriceTag({ originalPrice, discount }: PriceProps) {
  const price = (originalPrice - (originalPrice * discount) / 100).toFixed(2);

  return (
    <S.PriceBox>
      <S.Price className="product-detail__price">
        ${price}
        <span>{discount.toFixed(2)}%</span>
      </S.Price>
      <S.OriginalPrice className="product-detail__original-price">
        ${originalPrice.toFixed(2)}
      </S.OriginalPrice>
    </S.PriceBox>
  );
}
