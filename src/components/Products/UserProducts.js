import { useSelector } from 'react-redux';
// Components
import Product from './Product';

const UserProducts = () => {
  // State
  const products = useSelector((state) => state.catalog.products);
  const currentUser = useSelector((state) => state.user.user);
  // Utils
  const productItems = [...products]
    .filter((product) => product.user_id === currentUser.id)
    .map((product) => <Product key={product.id} product={product} />);

  return (
    <div>
      <h1>My products ({productItems.length})</h1>
      {productItems}
    </div>
  );
};

export default UserProducts;
