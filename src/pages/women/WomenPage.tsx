import Gallery from '../../components/gallery';
import Header from '../../components/header';
import ProductCard from '../../components/product-card';
import * as S from './style';

export default function Home() {
  return (
    <>
      <Header />
      <S.ProductSection>
        <Gallery />
        <ProductCard />
      </S.ProductSection>
    </>
  );
}
