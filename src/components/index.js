import { Switch, Route } from 'react-router-dom';
// Components
import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={Product} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign_up" component={SignUp} />
    </Switch>
  );
};

export default Main;
