import { useSelector } from 'react-redux';
// Components
import Loading from '../Loading';
import Error from '../Error';
import Product from './Product';
// Styles
import { ProductsContainer, SliderPaginationContainer, Button } from './Styles.styled';

const UserFavorites = () => {
  // State
  const currentUser = useSelector(state => state.user.user);
  const loading = useSelector(state => state.catalog.loaders.loadingProducts);
  const error = useSelector(state => state.catalog.errors.loadingProducts);
  const products = useSelector(state => state.catalog.products);

  // Utils
  const productItems = [...products]
    .filter(product => product.favorited_by.some(favorite => favorite.id === currentUser.id))
    .map(product => <Product key={product.id} product={product} />);

  return (
    <ProductsContainer>
      {loading ? <Loading /> : null}
      {error ? <Error errors={error} /> : null}
      <div className="slider">
        {productItems.length === 0 && !loading && !error ? (
          <div className="no-products">
            <p>No crafts favorited by you.</p>
            <Button to="/products"> Browse crafts</Button>
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

export default UserFavorites;
