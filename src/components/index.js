import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Home from './Home';
import Products from './Products';
import ProductDetails from './Products/ProductDetails';
import Creations from './Products/Creations';
import Favorites from './Products/Favorites';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import UserDetails from './UserDetails';
import Help from './Help';
// Actions
import { loginFromStorage } from '../features/user/userSlice';

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

  return (
    <>
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
        <Route exact path="/creations">
          {loggedIn ? <Creations /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/favorites">
          {loggedIn ? <Favorites /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/account">
          {loggedIn ? <UserDetails /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/products" component={Products} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route path="*" component={Home} />
      </Switch>
    </>
  );
};

export default Main;
