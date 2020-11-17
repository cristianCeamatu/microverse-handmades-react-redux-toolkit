// Components
import LoginForm from '../features/user/LoginForm';
const Login = () => (
  <main>
    <header>
      <h1>Sign in</h1>
      <p>Hello there! Sign in and start managing your system</p>
    </header>

    <LoginForm />

    <footer>
      <a href="/" onClick={(e) => e.preventDefault()}>
        Forgot Password?
      </a>
    </footer>
  </main>
);

export default Login;
