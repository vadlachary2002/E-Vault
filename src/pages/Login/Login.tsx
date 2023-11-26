import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';

const Login = () => {
    return (
        <ErrorBoundary>
            <div>Login page</div>
        </ErrorBoundary>
    );
};

export default Login;
