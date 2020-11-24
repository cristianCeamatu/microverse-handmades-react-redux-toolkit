// Components
import UserProducts from './UserProducts';
import MobileLayout from '../Layout/MobileLayout';
// Styles
import { MobileContainer } from '../Styles.styled';

const Products = () => (
  <MobileLayout title="My creations" productPage={false}>
    <MobileContainer>
      <UserProducts />
    </MobileContainer>
  </MobileLayout>
);

export default Products;
