import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Components
import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Nav from '../components/Nav';
const Main = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route exact path="/sign_up">
          {loggedIn ? <Redirect to="/dashboard" /> : <SignUp />}
        </Route>
      </Switch>
    </>
  );
};

export default Main;
