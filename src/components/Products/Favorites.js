// Components
import UserFavorites from './UserFavorites';
import MobileLayout from '../Layout/MobileLayout';
// Styles
import { MobileContainer } from '../Styles.styled';

const Products = () => (
  <MobileLayout title="My favorites" productPage={false}>
    <MobileContainer>
      <UserFavorites />
    </MobileContainer>
  </MobileLayout>
);

export default Products;
