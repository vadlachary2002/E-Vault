import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';

const MyDocs = () => {
  return (
    <ErrorBoundary>
      <div>My documents</div>
    </ErrorBoundary>
  );
};

export default MyDocs;
