import { Link } from 'react-router-dom';
// Components
import LoginForm from '../features/user/LoginForm';

const Login = () => {
  return (
    <main>
      <header>
        <h1>Sign in</h1>
        <p>Hello there! Sign in and start managing your system</p>
      </header>

      <LoginForm />

      <footer>
        <Link to="/sign_up">Sign up</Link>
      </footer>
    </main>
  );
};

export default Login;
