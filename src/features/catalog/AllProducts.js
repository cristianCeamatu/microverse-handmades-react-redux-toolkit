import { useSelector } from 'react-redux';
// Components
import Product from './Product';

const AllProducts = () => {
  const products = useSelector((state) => state.catalog.products);
  const productsItems = [...products].map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div>
      <h1>All categories</h1>
      {productsItems}
    </div>
  );
};

export default AllProducts;
