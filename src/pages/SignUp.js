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
      <a href="/" onClick={(e) => e.preventDefault()}>
        Already registered?
      </a>
    </footer>
  </main>
);

export default SignUp;
