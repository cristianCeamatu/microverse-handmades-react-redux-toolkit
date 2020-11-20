import { useEffect, useState } from 'react';
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
import Navbar from '../components/Navbar';
import Error from '../components/Error';
import Flash from '../components/Flash';
import Sidebar from '../components/Sidebar';
// Actions
import { loginFromStorage } from '../features/user/userSlice';
import { getProducts } from '../features/catalog/catalogSlice';
// Styles
import { MainContainer } from '../components/MainContainer.styled';
const Main = () => {
  // State
  let loggedIn = useSelector((state) => state.user.loggedIn);
  const error = useSelector((state) => state.catalog.errors.loadingProducts);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  window.flash = (message, type = 'success') =>
    Bus.emit('flash', { message, type });

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <Navbar sidebarIsOpen={isOpen} toggle={toggle} />
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
      </MainContainer>
    </>
  );
};

export default Main;
