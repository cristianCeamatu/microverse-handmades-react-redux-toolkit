import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// Actions
import { login } from './userSlice';

const LoginForm = () => {
  // TODO redirect to home page if logged_in
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.table('data :>> ', data);
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          name="email"
          placeholder="Email"
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
              value: 80,
              message: 'Maximum 80 characters',
            },
          })}
        />
        <p>{errors.email && errors.email.message}</p>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({
            required: {
              value: true,
              message: 'This field is mandatory',
            },
          })}
        />
        <p>{errors.password && errors.password.message}</p>
      </div>

      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;
