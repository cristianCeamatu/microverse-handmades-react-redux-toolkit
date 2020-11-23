import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
// Actions
import { deleteProduct } from '../../features/catalog/catalogSlice';

const DeleteButton = ({ id, userId }) => {
  // State
  const currentUser = useSelector((state) => state.user.user);
  const deleteLoading = useSelector(
    (state) => state.catalog.loaders.deleteProduct
  );
  const deleteError = useSelector(
    (state) => state.catalog.errors.deleteProduct
  );

  // Effects
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    const response = window.confirm(
      'Are you sure you want to delete the item?'
    );
    if (response) dispatch(deleteProduct(id));
  };

  return (
    <>
      {deleteError ? <p>{deleteError}</p> : null}
      {currentUser.id === userId ? (
        <div className="delete-button">
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleteLoading && deleteLoading === id}
          >
            <FaTrashAlt />
          </button>
        </div>
      ) : null}
    </>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};

export default DeleteButton;
