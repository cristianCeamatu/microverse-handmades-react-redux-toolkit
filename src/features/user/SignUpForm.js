import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Error from '../../components/Error';
// Actions
import { signUp } from './userSlice';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('dispatching sign up');
    console.log('data :>> ', data);
    dispatch(signUp(data));
  };

  const signUpLoader = useSelector((state) => state.user.loaders.signUp);
  const signUpError = useSelector((state) => state.user.errors.signUp);

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
          })}
        />
        <p>{errors.password && errors.password.message}</p>
      </div>
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
              value: 6,
              message: 'Minimum 6 characters',
            },
            maxLength: {
              value: 80,
              message: 'Maximum 80 characters',
            },
          })}
        />
        <p>{errors.name && errors.name.message}</p>
      </div>
      <div>
        <input
          name="nickname"
          placeholder="Username"
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
        <p>{errors.nickname && errors.nickname.message}</p>
      </div>

      {signUpLoader ? (
        <button type="submit" disabled aria-disabled>
          Signing you up...
        </button>
      ) : (
        <button type="submit">Sign up</button>
      )}

      {(signUpError && <Error errors={signUpError} />) || null}
    </form>
  );
};

export default SignUpForm;
