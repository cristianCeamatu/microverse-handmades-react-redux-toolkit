import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { deleteProduct, favorite } from './catalogSlice';
// Utils
import { formatDate } from '../../utils/date';

const Product = ({ product }) => {
  // State
  const currentUser = useSelector((state) => state.user.user);
  const headers = useSelector((state) => state.user.headers);
  const deleteLoading = useSelector(
    (state) => state.catalog.loaders.deleteProduct
  );
  const deleteError = useSelector(
    (state) => state.catalog.errors.deleteProduct
  );
  const favoriteLoading = useSelector(
    (state) => state.catalog.loaders.favorite
  );
  const favoriteError = useSelector((state) => state.catalog.errors.favorite);
  const {
    id,
    name,
    description,
    price,
    usedFor,
    favorited_by: favoritedBy,
    created_at: createdAt,
    updated_at: updatedAt,
    ratings,
    user,
  } = product;

  // Effects
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct({ id, headers }));
  };
  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(favorite({ id, type, currentUser, headers }));
  };

  // Utils
  const createdDate = formatDate(createdAt);
  const updatedDate = formatDate(updatedAt);
  const isFavorited = favoritedBy.some((user) => user.id === currentUser.id);
  const type = isFavorited ? 'unfavorite' : 'favorite';
  return (
    <div>
      {deleteError ? <p>{deleteError}</p> : null}
      {currentUser.id === user.id ? (
        <div>
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleteLoading && deleteLoading === id}
          >
            X
          </button>
          {/* <button type="button">Edit</button> */}
        </div>
      ) : null}
      <button
        type="button"
        onClick={handleFavorite}
        disabled={favoriteLoading && favoriteLoading === id}
      >
        {isFavorited ? '♥' : '💓'}
      </button>
      <ul>
        <li>{name}</li>
        <li>{description}</li>
        <li>{(+price).toFixed(2)}</li>
        <li>{usedFor}</li>
        {ratings ? <li>{ratings.join('-')}</li> : null}
        <li>By {user.name}</li>
        {updatedDate !== createdDate ? <li>Updated {updatedDate}</li> : null}
        <li>Added {createdDate}</li>
        <li>
          <Link to={`/products/${id}`}>More details</Link>
        </li>
      </ul>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Product;
