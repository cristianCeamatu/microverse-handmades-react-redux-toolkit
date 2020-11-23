import PropTypes from 'prop-types';
// Components
import ShowProduct from './ShowProduct';
import MobileLayout from '../Layout/MobileLayout';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  return (
    <MobileLayout productPage={true}>
      <h1>Product Details</h1>
      <ShowProduct id={id} />
    </MobileLayout>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
