import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Loading from '../Loading';
import Error from '../Error';
import Product from './Product';
// Actions
import { getProducts } from '../../features/catalog/catalogSlice';
// Styles
import { ProductsContainer, SliderPaginationContainer, Button } from './Styles.styled';

const AllProducts = () => {
  // State
  const currentUser = useSelector(state => state.user.user);
  const loading = useSelector(state => state.catalog.loaders.loadingProducts);
  const error = useSelector(state => state.catalog.errors.loadingProducts);
  const products = useSelector(state => state.catalog.products);

  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) dispatch(getProducts());
  }, [dispatch, products]);

  // Utils
  const productItems = [...products]
    .filter(product => product.user_id === currentUser.id)
    .map(product => <Product key={product.id} product={product} />);

  return (
    <ProductsContainer>
      {loading ? <Loading /> : null}
      {error ? <Error errors={error} /> : null}
      <div className="slider">
        {productItems.length === 0 ? (
          <div className="no-products">
            <p>No crafts added by you.</p>
            <Button to="/dashboard">Add crafts</Button>
          </div>
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
