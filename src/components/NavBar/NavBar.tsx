import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Logo from './logo.png';
import './style.scss';

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => {
    setMenu(false);
  };
  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  return (
    <ErrorBoundary>
      <div className="navbar">
        <div className="heading">
          <img src={Logo} />
        </div>
        <div className="menu" onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul
          className={
            'listitems ' +
            (menu ? 'listitemsdisplayflex' : 'listitemsdisplaynone')
          }
          onClick={closeMenu}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mydocs">MyDocs</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </ErrorBoundary>
  );
};

export default NavBar;
