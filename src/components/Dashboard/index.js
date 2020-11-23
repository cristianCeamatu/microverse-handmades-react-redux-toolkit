// Components
import AddProductForm from '../Products/AddProductForm';
import UserProducts from '../Products/UserProducts';
import UserFavorites from '../Products/UserFavorites';
import UserDetails from '../UserDetails';
import Layout from '../Layout';

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
