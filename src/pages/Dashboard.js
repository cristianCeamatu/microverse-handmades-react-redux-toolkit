import AddProductForm from '../features/catalog/AddProductForm';
import UserProducts from '../features/catalog/UserProducts';
import UserFavorites from '../features/catalog/UserFavorites';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddProductForm />
      <UserFavorites />
      <UserProducts />
    </div>
  );
};

export default Dashboard;
