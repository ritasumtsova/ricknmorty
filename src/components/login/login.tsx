import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, Typography } from '@mui/material';
import { loadingSelector } from '../../store/selectors/loader';
import Loader from '../loader/loader';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { loading, errorMessage } = useSelector(loadingSelector);

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <Typography>{errorMessage}</Typography>;
  }

  const login = () => {
    navigate('/characters');
  };

  return <Button onClick={login}>fake auth</Button>;
};

export default Login;
