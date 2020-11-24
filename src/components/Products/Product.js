import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
// Components
import DeleteButton from './DeleteButton';
import FavoriteButton from './FavoriteButton';
// Styles
import { ProductContainer } from './Styles.styled';

const Product = ({ product }) => {
  // State
  const currentUser = useSelector(state => state.user.user);

  // Props
  const {
    id,
    name,
    price,
    usedFor,
    user_id: userId,
    image_url: imageUrl,
    ratings,
    favorited_by: favoritedBy,
  } = product;
  const rating = ratings || Math.floor(Math.random() * Math.floor(6));

  return (
    <ProductContainer>
      <Link to={`/products/${id}`}>
        <div className="image">
          <img src={imageUrl} alt="Product" />
          {currentUser.id ? (
            <>
              <DeleteButton userId={userId} id={+id} />
              <div className="likes">
                <p>
                  Likes &nbsp;
                  {favoritedBy.length}
                </p>
                <FavoriteButton className="favorite" id={+id} favoritedBy={favoritedBy} />
              </div>
            </>
          ) : null}
        </div>

        <div className="flex">
          <div className="details">
            <h3>{`${name.slice(0, 25)}`}</h3>
            <ReactStars
              count={5}
              value={rating}
              isHalf
              edit={false}
              size={20}
              activeColor="#ffd700"
            />
          </div>

          <div>
            <p>${(+price).toFixed(2)}</p>
            <p>
              Usage:
              {` ${usedFor}`}
            </p>
          </div>
        </div>
      </Link>
    </ProductContainer>
  );
};

Product.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Product;
