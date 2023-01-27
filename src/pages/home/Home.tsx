import Gallery from '../../components/gallery';
import PriceTag from '../../components/price-tag';
import * as S from './style';

export default function Home() {
  return (
    <S.ProductSection>
      <Gallery />
      <div>
        <PriceTag originalPrice={1000} discount={50} />
      </div>
    </S.ProductSection>
  );
}
