import ShowProduct from '../features/catalog/ShowProduct';
import PropTypes from 'prop-types';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  return (
    <div>
      <h1>Product Details</h1>
      <ShowProduct id={id} />
    </div>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
