import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Components
import FavoriteButton from './FavoriteButton';
import DeleteButton from './DeleteButton';
// Utils
import { formatDate } from '../../utils/date';

const Product = ({ product }) => {
  // State
  const currentUser = useSelector((state) => state.user.user);

  // Props
  const {
    id,
    name,
    description,
    price,
    usedFor,
    favorited_by: favoritedBy,
    created_at: createdAt,
    updated_at: updatedAt,
    user: creator,
    ratings,
  } = product;

  // Utils
  const createdDate = formatDate(createdAt);
  const updatedDate = formatDate(updatedAt);
  return (
    <div>
      <DeleteButton id={id} creator={creator} />
      {currentUser.id ? (
        <FavoriteButton id={+id} favoritedBy={favoritedBy} />
      ) : null}
      <ul>
        <li>{name}</li>
        <li>{description}</li>
        <li>{(+price).toFixed(2)}</li>
        <li>{usedFor}</li>
        {ratings ? <li>{ratings.join('-')}</li> : null}
        <li>By {creator.name}</li>
        <li>Likes ({favoritedBy.length})</li>
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
