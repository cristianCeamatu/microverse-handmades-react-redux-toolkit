import { useSelector } from 'react-redux';
// Components
import Loading from '../components/Loading';
import Error from '../components/Error';
import NewestProducts from '../features/catalog/NewestProducts';
import FavoritedProducts from '../features/catalog/FavoritedProducts';
const Home = () => {
  const loading = useSelector((state) => state.catalog.loaders.loadingProducts);
  const error = useSelector((state) => state.catalog.errors.loadingProducts);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error errors={[error]} />
  ) : (
    <div>
      <h1>Home</h1>
      <NewestProducts />
      <FavoritedProducts />
    </div>
  );
};

export default Home;
