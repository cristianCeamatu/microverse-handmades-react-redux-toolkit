import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Bus from '../utils/Bus';
// Components
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Nav from './Nav';
import Error from './Error';
import Flash from './Flash';
// Actions
import { loginFromStorage } from '../features/user/userSlice';
import { getProducts } from '../features/catalog/catalogSlice';
const Main = () => {
  // State
  let loggedIn = useSelector((state) => state.user.loggedIn);
  const error = useSelector((state) => state.catalog.errors.loadingProducts);

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
    <>
      <Nav />
      <Flash />
      {error ? (
        <Error errors={`${error}. Please contact the administrator.`} />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
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
      )}
    </>
  );
};

export default Main;
