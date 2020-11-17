import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Nav from '../components/Nav';
// Actions
import { loginFromStorage } from '../features/user/userSlice';
const Main = () => {
  let loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loggedIn) {
      const userData = localStorage.getItem('currentUser');
      if (userData) {
        const { user, header } = JSON.parse(userData);
        dispatch(loginFromStorage({ user, header }));
      }
    }
  }, [dispatch, loggedIn]);
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
