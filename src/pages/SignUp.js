// Components
import SignUpForm from '../features/user/SignUpForm';
// Styles
import { Container, Button } from './Components.styled.js';

const SignUp = () => (
  <Container>
    <div className="wrapper">
      <header>
        <h1>Sign up</h1>
        <p>Hello there! Sign up and start managing your system</p>
      </header>

      <SignUpForm />

      <footer>
        <Button to="/login">Already registered?</Button>
      </footer>
    </div>
  </Container>
);

export default SignUp;
