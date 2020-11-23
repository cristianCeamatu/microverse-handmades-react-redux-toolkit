import PropTypes from 'prop-types';
// Components
import ShowProduct from './ShowProduct';
import MobileLayout from '../Layout/MobileLayout';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  return (
    <MobileLayout productPage>
      <ShowProduct id={id} />
    </MobileLayout>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
