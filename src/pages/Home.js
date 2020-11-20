// Components
import HeroSection from '../components/HeroSection';
import DashboardSection from '../components/DashboardSection';
import DesignerSection from '../components/DesignerSection';
import PeopleSection from '../components/PeopleSection';
import StartFreeSection from '../components/StartFreeSection';
import Layout from './Layout';

const Home = () => (
  <Layout>
    <HeroSection />
    <DashboardSection />
    <DesignerSection />
    <PeopleSection />
    <StartFreeSection />
  </Layout>
);

export default Home;
