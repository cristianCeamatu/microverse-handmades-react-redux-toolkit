// Assets
import product1 from '../../../assets/homepage/product1.png';
import product2 from '../../../assets/homepage/product2.png';
import product3 from '../../../assets/homepage/product3.png';
import product4 from '../../../assets/homepage/product4.png';
// Styles
import { Container, Button } from './DesignerSection.styles';

const DesignerSection = () => (
  <Container>
    <div className="wrapper">
      <div className="images">
        <img src={product1} alt="Product 1" width="200" height="280" />
        <img src={product2} alt="Product 2" width="200" height="280" />
        <img src={product3} alt="Product 3" width="200" height="280" />
        <img src={product4} alt="Product 4" width="200" height="280" />
      </div>

      <div className="details">
        <h2>Designer, architect or crafts lover?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Button to="/products">Browse crafts</Button>
      </div>
    </div>
  </Container>
);

export default DesignerSection;
