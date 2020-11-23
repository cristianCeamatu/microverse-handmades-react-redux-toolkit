import { useSelector } from 'react-redux';
// Components
import Loading from '../Loading';
import Error from '../Error';
import Product from './Product';
// Styles
import { ProductsContainer, SliderPaginationContainer } from './Styles.styled';

const UserFavorites = () => {
  // State
  const currentUser = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.catalog.loaders.loadingProducts);
  const error = useSelector((state) => state.catalog.errors.loadingProducts);
  const products = useSelector((state) => state.catalog.products);

  // Utils
  const productItems = [...products]
    .filter((product) =>
      product.favorited_by.some((favorite) => favorite.id === currentUser.id)
    )
    .map((product) => <Product key={product.id} product={product} />);

  return (
    <ProductsContainer>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error errors={error} />
      ) : (
        <div className="slider">
          {productItems.length === 0
            ? 'No products favorited by you.'
            : productItems}
        </div>
      )}

      <SliderPaginationContainer>
        Total: {productItems.length}
      </SliderPaginationContainer>
    </ProductsContainer>
  );
};

export default UserFavorites;
