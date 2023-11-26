import React from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Logo from './logo.png';
import './style.scss';

const NavBar = () => {
    return (
        <ErrorBoundary>
            <div className="navbar">
                <div className="heading">
                    <img src={Logo} />
                </div>
                <ul className="listitems">
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mydocs">MyDocs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>{' '}
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>{' '}
                    </li>
                </ul>
            </div>
        </ErrorBoundary>
    );
};

export default NavBar;
