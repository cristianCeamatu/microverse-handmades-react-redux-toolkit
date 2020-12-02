// Components
import AllProducts from './AllProducts';
import MobileLayout from '../Layout/MobileLayout';
// Styles
import { MobileContainer } from '../Styles.styled';

const Products = () => (
  <MobileLayout title="Crafts" productPage={false}>
    <MobileContainer>
      <AllProducts />
    </MobileContainer>
  </MobileLayout>
);

export default Products;
