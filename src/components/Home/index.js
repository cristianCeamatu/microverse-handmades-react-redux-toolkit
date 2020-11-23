import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import HeroSection from './HeroSection';
import DashboardSection from './DashboardSection';
import DesignerSection from './DesignerSection';
import PeopleSection from './PeopleSection';
import StartFreeSection from './StartFreeSection';
import Layout from '../Layout';
// Actions
import { getProducts } from '../../features/catalog/catalogSlice';

const Home = () => {
  // State
  const products = useSelector(state => state.catalog.products);
  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) dispatch(getProducts());
  }, [dispatch, products]);

  return (
    <Layout homepage>
      <HeroSection />
      <DashboardSection />
      <DesignerSection />
      <PeopleSection />
      <StartFreeSection />
    </Layout>
  );
};

export default Home;
