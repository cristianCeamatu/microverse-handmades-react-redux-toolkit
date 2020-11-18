import AddProductForm from '../features/catalog/AddProductForm';
import UserProducts from '../features/catalog/UserProducts';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserProducts />
      <AddProductForm />
    </div>
  );
};

export default Dashboard;
