import PropTypes from 'prop-types';
const Product = ({ product }) => {
  const { name, description, price, usedFor, ratings, user } = product;
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{description}</li>
        <li>{price}</li>
        <li>{usedFor}</li>
        {ratings ? <li>{ratings.join('-')}</li> : null}
        <li>By {user.name}</li>
      </ul>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Product;
