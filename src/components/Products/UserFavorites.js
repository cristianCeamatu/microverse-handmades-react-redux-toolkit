import { useSelector } from 'react-redux';
// Components
import Product from './Product';

const UserFavorites = () => {
  // State
  const products = useSelector((state) => state.catalog.products);
  const currentUser = useSelector((state) => state.user.user);
  // Utils
  const productItems = [...products]
    .filter((product) =>
      product.favorited_by.some((favorite) => favorite.id === currentUser.id)
    )
    .map((product) => <Product key={product.id} product={product} />);

  return (
    <div>
      <h1>My favorited ({productItems.length})</h1>
      {productItems}
    </div>
  );
};

export default UserFavorites;
