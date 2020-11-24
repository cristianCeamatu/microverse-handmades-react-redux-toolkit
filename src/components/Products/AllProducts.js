import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Loading from '../Loading';
import Error from '../Error';
import Product from './Product';
// Actions
import { getProducts } from '../../features/catalog/catalogSlice';
// Styles
import { ProductsContainer, SliderPaginationContainer } from './Styles.styled';

const AllProducts = () => {
  // State
  const loading = useSelector(state => state.catalog.loaders.loadingProducts);
  const error = useSelector(state => state.catalog.errors.loadingProducts);
  const products = useSelector(state => state.catalog.products);

  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Utils
  const productItems = [...products].map(product => <Product key={product.id} product={product} />);

  return (
    <ProductsContainer>
      {loading ? <Loading /> : null}
      {error ? <Error errors={error} /> : null}
      <div className="slider">
        {productItems.length === 0 ? (
          <p className="text-center">No products in the database.</p>
        ) : (
          productItems
        )}
      </div>
      <SliderPaginationContainer>
        Total:
        {productItems.length}
      </SliderPaginationContainer>
    </ProductsContainer>
  );
};

export default AllProducts;
