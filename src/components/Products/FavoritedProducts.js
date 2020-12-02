import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Product from './Product';
// Actions
import { getProducts } from '../../features/catalog/catalogSlice';

const FavoritedProducts = () => {
  // State
  const products = useSelector(state => state.catalog.products);
  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) dispatch(getProducts());
  }, [dispatch, products]);

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
