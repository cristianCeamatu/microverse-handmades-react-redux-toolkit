import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import ReactStars from 'react-rating-stars-component';
// Components
import FavoriteButton from './FavoriteButton';
import Loading from '../Loading';
import Error from '../Error';
// Utils
import formatDate from '../../utils/date';
// Actions
import { getProduct } from '../../features/catalog/catalogSlice';
// Styles
import { ShowProductContainer } from './Styles.styled';

const ShowProduct = ({ id }) => {
  // State
  const currentUser = useSelector(state => state.user.user);
  const product = useSelector(state => state.catalog.product);
  const loading = useSelector(state => state.catalog.loaders.loadingProduct);
  const error = useSelector(state => state.catalog.errors.loadingProduct);

  // Props
  const {
    description,
    price,
    usedFor,
    ratings,
    image_url: imageUrl,
    user_name: userName,
    created_at: createdAt,
    updated_at: updatedAt,
    favorited_by: favoritedBy,
  } = product;
  const rating = ratings || Math.floor(Math.random() * Math.floor(6));

  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  // Utils
  const createdDate = formatDate(createdAt);
  const updatedDate = formatDate(updatedAt);

  return (
    <ShowProductContainer>
      {loading ? <Loading /> : null}
      {error ? <Error errors={error} /> : null}
      <>
        <div className="image">
          {currentUser.id ? (
            <div className="likes">
              <p>
                Likes &nbsp;
                {favoritedBy.length}
              </p>
              <FavoriteButton className="favorite" id={+id} favoritedBy={favoritedBy} />
            </div>
          ) : null}
          <img src={imageUrl} alt="Product" />

          <div className="flex">
            <div className="details">
              <img
                src="http://unsplash.it/50/50?gravity=center"
                alt="Random unsplash img"
                width="50"
                height="50"
              />
              <div className="profile">
                <h3>{userName}</h3>
                <ReactStars
                  count={5}
                  value={rating}
                  isHalf
                  edit={false}
                  size={20}
                  activeColor="#ffd700"
                  color="#fff"
                />
              </div>
            </div>

            <div className="price">
              <p>
                $
                {(+price).toFixed(2)}
              </p>
              <p>
                Usage:
                {usedFor}
              </p>
            </div>
          </div>
        </div>
        <div className="description">
          <h3>About this craft</h3>
          <p>{description}</p>

          <p className="date">
            {updatedDate !== createdDate ? `Updated ${updatedDate}` : `Added ${createdDate}`}
          </p>
        </div>

        <a href="/">Apply to rent</a>
      </>
    </ShowProductContainer>
  );
};

ShowProduct.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowProduct;
