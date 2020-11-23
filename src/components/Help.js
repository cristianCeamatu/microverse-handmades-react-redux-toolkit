// Styles
import { ProductsContainer, Button } from './Products/Styles.styled';

const Help = () => {
  return (
    <ProductsContainer>
      <div className="slider">
        <div class="no-products">
          <p>Page currently under construction.</p>
          <Button to="/"> Go home</Button>
        </div>
      </div>
    </ProductsContainer>
  );
};

export default Help;
