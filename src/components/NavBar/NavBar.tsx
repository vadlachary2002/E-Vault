import React from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorBoundary } from '@components/ErrorBoundary';
import '../../styles/NavBar/style.scss';

const NavBar = () => {
    return (
        <ErrorBoundary>
            <div className="navbar">
                <div className="heading">
                    {' '}
                    <h1>E-Vault</h1>{' '}
                    <small>A blockchain based document management system</small>
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
