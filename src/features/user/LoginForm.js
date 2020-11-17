import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Error from '../../components/Error';
// Actions
import { login } from './userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    dispatch(login(data));
    reset(data);
  };

  const loginLoader = useSelector((state) => state.user.loaders.login);
  const loginError = useSelector((state) => state.user.errors.login);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
              value: 6,
              message: 'Minimum 6 characters',
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
            minLength: {
              value: 6,
              message: 'Minimum 6 characters',
            },
          })}
        />
        <p>{errors.password && errors.password.message}</p>
      </div>

      {loginLoader ? (
        <button type="submit" disabled aria-disabled>
          Signing in...
        </button>
      ) : (
        <button type="submit">Sign In</button>
      )}

      {(loginError && <Error errors={loginError} />) || null}
    </form>
  );
};

export default LoginForm;