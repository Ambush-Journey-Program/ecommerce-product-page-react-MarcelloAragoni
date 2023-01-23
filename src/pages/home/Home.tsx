import Button from '../../components/button';

export default function Home() {
  return (
    <>
      <Button icon="add" addcart="addcart">
        Add to Cart
      </Button>
      <Button icon="plus"></Button>
      <Button icon="minus"></Button>
      <Button icon="previous"></Button>
      <Button icon="next"></Button>
      <Button icon="delete"></Button>
    </>
  );
}
