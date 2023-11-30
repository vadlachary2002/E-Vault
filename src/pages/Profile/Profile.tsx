import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';

const Profile = () => {
  return (
    <ErrorBoundary>
      <div>Profile Page</div>
    </ErrorBoundary>
  );
};

export default Profile;
