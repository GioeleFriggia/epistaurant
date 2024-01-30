// src/Welcome.js
import React from 'react';
import { Alert } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div className="mt-4">
      <Alert variant="success">
        <Alert.Heading>Welcome to EpiBooks!</Alert.Heading>
        <p>Discover a world of books with us.</p>
      </Alert>
    </div>
  );
};

export default Welcome;
