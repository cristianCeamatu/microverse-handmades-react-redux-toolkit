import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
// Components
import Loading from '../../components/Loading';
import Error from '../../components/Error';
// Actions
import { getProduct } from './catalogSlice';
const ShowProduct = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  const product = useSelector((state) => state.catalog.product);
  const loading = useSelector((state) => state.catalog.loaders.loadingProduct);
  const error = useSelector((state) => state.catalog.errors.loadingProduct);

  const { name, description, price, usedFor, ratings, user } = product;
  return loading ? (
    <Loading />
  ) : error ? (
    <Error errors={[error]} />
  ) : (
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

ShowProduct.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowProduct;
