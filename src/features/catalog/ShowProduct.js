import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
// Components
import FavoriteButton from './FavoriteButton';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
// Utils
import { formatDate } from '../../utils/date';
// Actions
import { getProduct } from './catalogSlice';

const ShowProduct = ({ id }) => {
  // State
  const currentUser = useSelector((state) => state.user.user);
  const product = useSelector((state) => state.catalog.product);
  const loading = useSelector((state) => state.catalog.loaders.loadingProduct);
  const error = useSelector((state) => state.catalog.errors.loadingProduct);

  // Props
  const {
    name,
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

  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  // Utils
  const createdDate = formatDate(createdAt);
  const updatedDate = formatDate(updatedAt);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error errors={[error]} />
  ) : (
    <div>
      {currentUser.id ? (
        <FavoriteButton id={+id} favoritedBy={favoritedBy} />
      ) : null}
      <ul>
        <li>
          <img src={imageUrl} alt="Product" />
        </li>
        <li>{name}</li>
        <li>{description}</li>
        <li>{(+price).toFixed(2)}</li>
        <li>{usedFor}</li>
        {ratings ? <li>{ratings.join('-')}</li> : null}
        <li>By {userName}</li>
        <li>Likes ({favoritedBy.length})</li>
        {updatedDate !== createdDate ? <li>Updated {updatedDate}</li> : null}
        <li>Added {createdDate}</li>
      </ul>
    </div>
  );
};

ShowProduct.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowProduct;
