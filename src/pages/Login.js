import { Container, Button } from './Login.styled.js';
// Components
import LoginForm from '../features/user/LoginForm';

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
          <Button to="/sign_up">Already registered?</Button>
        </footer>
      </div>
    </Container>
  );
};

export default Login;
