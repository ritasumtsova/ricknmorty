import React from 'react';
import { CircularProgress } from '@mui/material';
import './loader.css';

const Loader: React.FC = () => {
  return (
    <div className="Loader">
      <CircularProgress />
    </div>
  );
};

export default Loader;
