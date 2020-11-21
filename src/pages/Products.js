import { useSelector } from 'react-redux';
// Components
import Loading from '../components/Loading';
import Error from '../components/Error';
import AllProducts from '../features/catalog/AllProducts';
import MobileLayout from './MobileLayout';
// Styles
import { MobileContainer } from './Components.styled';

const Products = () => {
  // State
  const loading = useSelector((state) => state.catalog.loaders.loadingProducts);
  const error = useSelector((state) => state.catalog.errors.loadingProducts);

  return (
    <MobileLayout>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error errors={error} />
      ) : (
        <MobileContainer>
          <h1>All products</h1>
          <AllProducts />
        </MobileContainer>
      )}
    </MobileLayout>
  );
};

export default Products;
