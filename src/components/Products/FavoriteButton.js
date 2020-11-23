import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { favorite } from '../../features/catalog/catalogSlice';

const FavoriteButton = ({ id, favoritedBy }) => {
  // State
  const currentUser = useSelector((state) => state.user.user);
  const favoriteLoading = useSelector(
    (state) => state.catalog.loaders.favorite
  );
  const favoriteError = useSelector((state) => state.catalog.errors.favorite);

  // Effects
  const dispatch = useDispatch();
  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(favorite({ id, type, currentUser }));
  };

  // Utils
  const isFavorited = favoritedBy.some((user) => user.id === currentUser.id);
  const type = isFavorited ? 'unfavorite' : 'favorite';

  return (
    <>
      <button
        type="button"
        onClick={handleFavorite}
        disabled={favoriteLoading && favoriteLoading === id}
      >
        {isFavorited ? '♥' : '💓'}
      </button>

      {favoriteError ? <p>{favoriteError}</p> : null}
    </>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  favoritedBy: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoriteButton;
