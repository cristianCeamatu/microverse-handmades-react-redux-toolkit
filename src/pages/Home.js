import { useSelector } from 'react-redux';
// Components
import Loading from '../components/Loading';
import Error from '../components/Error';
import NewestProducts from '../features/catalog/NewestProducts';
import FavoritedProducts from '../features/catalog/FavoritedProducts';
import HeroSection from '../components/HeroSection';
import DashboardSection from '../components/DashboardSection';
import DesignerSection from '../components/DesignerSection';

const Home = () => {
  // State
  const loading = useSelector((state) => state.catalog.loaders.loadingProducts);
  const error = useSelector((state) => state.catalog.errors.loadingProducts);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error errors={[error]} />
  ) : (
    <div>
      <HeroSection />
      <DashboardSection />
      <DesignerSection />
      <FavoritedProducts />
      <NewestProducts />
    </div>
  );
};

export default Home;
