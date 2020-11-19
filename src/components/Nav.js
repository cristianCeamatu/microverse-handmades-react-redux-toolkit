import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { logout } from '../features/user/userSlice';
const Nav = () => {
  // State
  const loggedIn = useSelector((state) => state.user.loggedIn);
  // Effects
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      {loggedIn ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Nav;
