// Components
import LoginForm from './LoginForm';
// Styles
import { Container, StyledLink } from '../Styles.styled.js';

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
          <StyledLink to="/sign_up">Create account</StyledLink>
        </footer>
      </div>
    </Container>
  );
};

export default Login;
