import { useEffect } from 'react';
import PropTypes from 'prop-types';
// Components
import AddProductForm from '../features/catalog/AddProductForm';
import UserProducts from '../features/catalog/UserProducts';
import UserFavorites from '../features/catalog/UserFavorites';

const Dashboard = (props) => {
  console.log('props :>> ', props);
  useEffect(() => {
    // console.log('location.state :>> ', location.state);
    // if (location.state) window.flash(location.state);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <AddProductForm />
      <UserFavorites />
      <UserProducts />
    </div>
  );
};

// Dashboard.defaultProps = {
//   flash: undefined,
// };

// Dashboard.propTypes = {
//   flash: PropTypes.string,
// };

export default Dashboard;
