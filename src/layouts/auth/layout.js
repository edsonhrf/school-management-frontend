import React from 'react';
import { Box } from '@mui/material';
import LoginImage from '../../assets/login.jpg';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: '1 1 40%',
          backgroundColor: '#fffff',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          flex: '1 1 60%',
          backgroundColor: '#f0f0f0',
        }}
      >
        <img src={LoginImage} alt="Login Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
    </Box>
  );
};

export default Layout;