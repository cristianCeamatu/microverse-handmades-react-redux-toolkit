import { Link } from 'react-router-dom';
// Components
import SignUpForm from '../features/user/SignUpForm';
const SignUp = () => (
  <main>
    <header>
      <h1>Sign up</h1>
      <p>Hello there! Sign up and start managing your system</p>
    </header>

    <SignUpForm />

    <footer>
      <Link to="/login">Already registered?</Link>
    </footer>
  </main>
);

export default SignUp;
