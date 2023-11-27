import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Navbar } from '@components/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Login, Profile, MyDocs } from '../../pages';
const App = () => {
    return (
        <ErrorBoundary>
            <Router basename="/">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/mydocs" element={<MyDocs />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
};

export default App;
