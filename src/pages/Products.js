import { useSelector } from 'react-redux';
// Components
import Loading from '../components/Loading';
import Error from '../components/Error';
import AllProducts from '../features/catalog/AllProducts';
const Products = () => {
  const loading = useSelector((state) => state.catalog.loaders.loadingProducts);
  const error = useSelector((state) => state.catalog.errors.loadingProducts);
  return loading ? (
    <Loading />
  ) : error ? (
    <Error errors={[error]} />
  ) : (
    <div>
      <h1>All products</h1>
      <AllProducts />
    </div>
  );
};

export default Products;
