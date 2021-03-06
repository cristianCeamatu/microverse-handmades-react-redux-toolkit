// Components
import SignUpForm from './SignUpForm';
// Styles
import { Container, StyledLink } from '../Styles.styled';

const SignUp = () => (
  <Container>
    <div className="wrapper">
      <header>
        <h1>Sign up</h1>
        <p>Hello there! Sign up and start managing your system</p>
      </header>

      <SignUpForm />

      <footer>
        <StyledLink to="/login">Already registered?</StyledLink>
      </footer>
    </div>
  </Container>
);

export default SignUp;
