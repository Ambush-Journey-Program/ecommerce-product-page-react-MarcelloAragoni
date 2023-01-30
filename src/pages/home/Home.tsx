import Gallery from '../../components/gallery';
import PriceTag from '../../components/price-tag';
import ProductAmount from '../../components/product-amount';
import * as S from './style';

export default function Home() {
  return (
    <S.ProductSection>
      <Gallery />
      <div>
        <PriceTag originalPrice={1000} discount={50} />
        <ProductAmount />
      </div>
    </S.ProductSection>
  );
}
