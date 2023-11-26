import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';

const Home = () => {
    return (
        <ErrorBoundary>
            <div>Home Page</div>
        </ErrorBoundary>
    );
};

export default Home;
