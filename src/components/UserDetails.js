import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// Components
import MobileLayout from './Layout/MobileLayout';
// Actions
import { logout } from '../features/user/userSlice';
// Styles
import { Account } from './Styles.styled';

const UserDetails = () => {
  // State
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();

  // Effects
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  };

  // Utils
  const { email, name, nickname } = user;
  return (
    <MobileLayout title={name} productPage={false}>
      <Account>
        <div className="wrapper">
          <h3>Account details</h3>
          <ul>
            <li>
              <img
                src="http://unsplash.it/100/100?gravity=center"
                alt="Random unsplash img"
                width="100"
                height="100"
              />
            </li>
            <li>
              Name:
              {name}
            </li>
            <li>
              Username:
              {nickname}
            </li>
            <li>
              Email:
              {email}
            </li>
            <li className="logout">
              <a href="/" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </Account>
    </MobileLayout>
  );
};

export default UserDetails;
