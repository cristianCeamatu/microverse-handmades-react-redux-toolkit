import { useSelector } from 'react-redux';
// Components
import Product from './Product';
// Actions

const NewestProducts = () => {
  const products = useSelector((state) => state.catalog.products);
  const productsItems = products
    .slice(0, 4)
    .map((product) => <Product key={product.id} product={product} />);

  return (
    <div>
      <h1>Newest Products</h1>
      {productsItems}
    </div>
  );
};

export default NewestProducts;
