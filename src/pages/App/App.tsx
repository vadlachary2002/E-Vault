import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Navbar } from '@components/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Login, Profile, MyDocs, Register } from '../../pages';
const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mydocs" element={<MyDocs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
