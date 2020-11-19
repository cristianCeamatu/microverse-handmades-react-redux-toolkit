import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Error from '../../components/Error';
// Actions
import { addProduct } from './catalogSlice';

const AddProductForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('usedFor', data.usedFor);
    formData.append('user_id', data.user_id);
    formData.append('image', data.image[0]);

    // formData.append('item', data.item);
    dispatch(addProduct({ formData, headers }));
  };

  const user = useSelector((state) => state.user.user);
  const headers = useSelector((state) => state.user.headers);
  const loading = useSelector((state) => state.catalog.loaders.addProduct);
  const error = useSelector((state) => state.catalog.errors.addProduct);
  return (
    <div>
      <h3>Add product</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            name="name"
            placeholder="Name"
            ref={register({
              required: {
                value: true,
                message: 'This field is mandatory',
              },
              minLength: {
                value: 2,
                message: 'Minimum 2 characters',
              },
              maxLength: {
                value: 40,
                message: 'Maximum 40 characters',
              },
            })}
          />
          <p>{errors.name && errors.name.message}</p>
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            rows="10"
            cols="20"
            ref={register({
              required: {
                value: true,
                message: 'This field is mandatory',
              },
              minLength: {
                value: 6,
                message: 'Minimum 6 characters',
              },
              maxLength: {
                value: 50000,
                message: 'Maximum 50.000 characters',
              },
            })}
          />
          <p>{errors.description && errors.description.message}</p>
        </div>
        <div>
          <input
            name="price"
            placeholder="Price"
            type="number"
            ref={register({
              required: {
                value: true,
                message: 'This field is mandatory',
              },
              min: {
                value: 0,
                message: 'Only positive numbers',
              },
              max: {
                value: 999999999,
                message: 'Maximum 999.999.999',
              },
            })}
          />
          <p>{errors.price && errors.price.message}</p>
        </div>
        <div>
          <input
            name="usedFor"
            placeholder="Used for"
            ref={register({
              required: {
                value: true,
                message: 'This field is mandatory',
              },
              minLength: {
                value: 2,
                message: 'Minimum 2 characters',
              },
              maxLength: {
                value: 60,
                message: 'Maximum 60 characters',
              },
            })}
          />
          <p>{errors.usedFor && errors.usedFor.message}</p>
        </div>
        <div>
          <label htmlFor="image">
            <input
              type="file"
              name="image"
              accept="image/*"
              ref={register({
                required: {
                  value: true,
                  message: 'This field is mandatory',
                },
              })}
            />
            <p>{errors.image && errors.image.message}</p>
          </label>
        </div>
        <div>
          <input
            type="hidden"
            name="user_id"
            defaultValue={user.id}
            ref={register}
          />
        </div>
        {loading ? (
          <button type="submit" disabled aria-disabled>
            Adding product...
          </button>
        ) : (
          <button type="submit">Add product</button>
        )}

        {(error && <Error errors={error} />) || null}
      </form>
    </div>
  );
};

export default AddProductForm;
