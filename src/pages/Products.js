import { useSelector } from 'react-redux';
// Components
import Loading from '../components/Loading';
import Error from '../components/Error';
import AllProducts from '../features/catalog/AllProducts';
import Layout from './Layout';

const Products = () => {
  // State
  const loading = useSelector((state) => state.catalog.loaders.loadingProducts);
  const error = useSelector((state) => state.catalog.errors.loadingProducts);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error errors={error} />
      ) : (
        <div>
          <h1>All products</h1>
          <AllProducts />
        </div>
      )}
    </Layout>
  );
};

export default Products;
