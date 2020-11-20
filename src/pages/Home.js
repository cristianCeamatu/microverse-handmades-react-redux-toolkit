import { useSelector } from 'react-redux';
// Components
import Loading from '../components/Loading';
import Error from '../components/Error';
import HeroSection from '../components/HeroSection';
import DashboardSection from '../components/DashboardSection';
import DesignerSection from '../components/DesignerSection';
import PeopleSection from '../components/PeopleSection';
import StartFreeSection from '../components/StartFreeSection';
import Footer from '../components/Footer';

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
      <PeopleSection />
      <StartFreeSection />
      <Footer />
    </div>
  );
};

export default Home;
