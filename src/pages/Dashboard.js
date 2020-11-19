// Components
import AddProductForm from '../features/catalog/AddProductForm';
import UserProducts from '../features/catalog/UserProducts';
import UserFavorites from '../features/catalog/UserFavorites';
import UserDetails from '../features/user/UserDetails';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserDetails />
      <AddProductForm />
      <UserFavorites />
      <UserProducts />
    </div>
  );
};

export default Dashboard;
