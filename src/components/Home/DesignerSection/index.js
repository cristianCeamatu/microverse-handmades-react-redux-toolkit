// Styles
import { Container, Button } from './DesignerSection.styles';

const DesignerSection = () => (
  <Container>
    <div className="wrapper">
      <div className="images">
        <img
          src="http://unsplash.it/200/280?random&gravity=center"
          alt="Random unsplash"
        />
        <img
          src="http://unsplash.it/200/280?gravity=center"
          alt="Random unsplash"
        />
        <img
          src="http://unsplash.it/200/280?random&gravity=center"
          alt="Random unsplash"
        />
        <img
          src="http://unsplash.it/200/280?gravity=center"
          alt="Random unsplash"
        />
      </div>

      <div className="details">
        <h2>Designer, architect or crafts lover?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button to="/products">Browse crafts</Button>
      </div>
    </div>
  </Container>
);

export default DesignerSection;
