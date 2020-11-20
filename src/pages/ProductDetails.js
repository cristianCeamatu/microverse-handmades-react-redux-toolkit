import PropTypes from 'prop-types';
// Components
import ShowProduct from '../features/catalog/ShowProduct';
import Layout from './Layout';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  return (
    <Layout>
      <h1>Product Details</h1>
      <ShowProduct id={id} />
    </Layout>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
