// Components
import AddProductForm from '../features/catalog/AddProductForm';
import UserProducts from '../features/catalog/UserProducts';
import UserFavorites from '../features/catalog/UserFavorites';
import UserDetails from '../features/user/UserDetails';
import Layout from './Layout';

const Dashboard = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <UserDetails />
      <AddProductForm />
      <UserFavorites />
      <UserProducts />
    </Layout>
  );
};

export default Dashboard;
