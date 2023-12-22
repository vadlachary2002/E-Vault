import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Logo from './utils/logo2.png';
import Logoname from './utils/logoname.png';
import './Home.scss';
import { UserLogin } from '../../models/User';
import { login } from '@services/User';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@store/User/selector';
import { RootState } from '@store/configureStore';

const defaultUser: UserLogin = {
  email: '',
  password: '',
};
const Home = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state: RootState) => {
    return selectUser(state);
  });

  const navigate = useNavigate();
  const [signup, setSignUp] = useState(false);
  const [user, setUser] = useState(defaultUser);
  const [state, setState] = useState(userStatus);
  const updateUser = (e: any) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { error, data } = await login(user);
    if (error) {
      console.log('error login');
      return;
    }
    console.log(data);
    const updatedUser = {
      ...state,
      email: data.email,
      isAdmin: data.isAdmin,
    };
    // dispatch(updateUser({status:updatedUser}));
  };
  const toggle = () => {
    setSignUp((prevSign) => !prevSign);
  };
  useEffect(() => {
    if (state?.status?.email) {
      navigate('/dashboard');
      return;
    }
  }, [state]);
  return (
    <ErrorBoundary>
      <div className="homebody">
        <div className="home">
          <div className={'box ' + (signup ? 'boxdisplaynone' : 'boxdisplay')}>
            <span className="signup" onClick={toggle}>
              Sign Up
            </span>
            <img className="logo" src={Logo} alt="logo2" />
            <img src={Logoname} alt="logo" />
            <div className="text">Leading the way in legal excellance</div>
          </div>
          <div
            className={
              'right ' + (signup ? 'rightdisplay' : 'rightdisplaynone')
            }
          >
            <form className="minibox" onSubmit={onSubmit}>
              <span className="back" onClick={toggle}>
                Back
              </span>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={updateUser}
                value={user.email}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={updateUser}
                value={user.password}
              />
              <input type="submit" value="Login" />
              <div className="links">
                <a href="/forgotpass">Forgot Password?</a>
                <a href="/register">
                  <b>Register</b>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
