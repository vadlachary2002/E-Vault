import React, { useState } from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Logo from './utils/logo2.png';
import Logoname from './utils/logoname.png';
import './Home.scss';

const Home = () => {
  const [signup, setSignUp] = useState(false);
  const toggle = () => {
    setSignUp((prevSign) => !prevSign);
  };
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
            <div className="minibox">
              <span className="back" onClick={toggle}>
                Back
              </span>
              <h2>Login</h2>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login" />
              <div className="links">
                <a href="/forgotpass">Forgot Password?</a>
                <a href="/register">
                  {' '}
                  <b>Register</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
