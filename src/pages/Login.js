// Components
import LoginForm from '../features/user/LoginForm';
// Styles
import { Container, Button } from './Components.styled.js';

const Login = () => {
  return (
    <Container>
      <div className="wrapper">
        <header>
          <h1>Sign in</h1>
          <p>Hello there! Sign in and start managing your system</p>
        </header>

        <LoginForm />

        <footer>
          <Button to="/sign_up">Create account</Button>
        </footer>
      </div>
    </Container>
  );
};

export default Login;
