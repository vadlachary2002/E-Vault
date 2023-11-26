import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import './Home.scss';

const Home = () => {
    return (
        <ErrorBoundary>
            <div className="home">Home Page</div>
        </ErrorBoundary>
    );
};

export default Home;
