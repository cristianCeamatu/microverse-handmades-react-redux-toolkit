import { useSelector } from 'react-redux';
// Components
import Product from './Product';
// Actions

const FavoritedProducts = () => {
  const products = useSelector(state => state.catalog.products);
  const productsItems = [...products]
    .sort((prodA, prodB) => prodB.favorited_by.length - prodA.favorited_by.length)
    .slice(0, 4)
    .map(product => <Product key={product.id} product={product} />);

  return (
    <div>
      <h1>Most favorited</h1>
      {productsItems}
    </div>
  );
};

export default FavoritedProducts;
