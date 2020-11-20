import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Bus from '../utils/Bus';
// Components
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
// Actions
import { loginFromStorage } from '../features/user/userSlice';
import { getProducts } from '../features/catalog/catalogSlice';

const Main = () => {
  // State
  let loggedIn = useSelector((state) => state.user.loggedIn);

  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loggedIn) {
      const userData = localStorage.getItem('currentUser');
      if (userData) {
        const { user } = JSON.parse(userData);
        dispatch(loginFromStorage(user));
      }
    }
  }, [dispatch, loggedIn]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  window.flash = (message, type = 'success') =>
    Bus.emit('flash', { message, type });

  return (
    <Switch>
      <Route exact path="/login">
        {loggedIn ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/sign_up">
        {loggedIn ? <Redirect to="/" /> : <SignUp />}
      </Route>
      <Route exact path="/dashboard">
        {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={ProductDetails} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Main;
