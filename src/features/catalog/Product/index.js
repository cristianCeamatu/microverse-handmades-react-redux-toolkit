import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
// Styles
import { Container } from './Product.styled.js';

const Product = ({ product }) => {
  // Props
  const { id, name, price, usedFor, image_url: imageUrl, ratings } = product;
  const rating = ratings ? ratings : 3.5;

  return (
    <Container>
      <Link to={`/products/${id}`}>
        <div className="image">
          <img src={imageUrl} alt="Product" />
        </div>

        <div className="flex">
          <div className="details">
            <h3>{name}</h3>
            <ReactStars
              count={5}
              value={rating}
              isHalf={true}
              edit={false}
              size={20}
              activeColor="#ffd700"
            />
          </div>

          <div>
            <p>$ {(+price).toFixed(2)}</p>
            <p>Usage: {usedFor}</p>
          </div>
        </div>
      </Link>
    </Container>
  );
};

Product.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Product;
