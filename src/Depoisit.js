import React from 'react'
import { useNavigate } from 'react-router-dom';
/*import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Avatar } from '@mui/material';
import User from './User';*/
import Navbar from './Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './Login';






function Depoisit() {
 const navigate = useNavigate();

 const Login = () =>{
  localStorage.removeItem('token')
  navigate('/')
 }
 
  return (
    <div>
    <Navbar />
    
      <Box display="flex" 
        alignItems="center"
        justifyContent="center"
        >
          <Box sx={{fontSize: 50}}> 
          You can deposit money at the bank.
          </Box>
       </Box>
      

      <Box display="flex" 
        alignItems="center"
        justifyContent="center">
       <Button type="submit"  variant="contained"sx={{ mt:5, mb: 2 }} onClick={Login} >
       <Box sx={{fontSize: 15}} > Back Page </Box>
        </Button>
        </Box>
        
      
      
      
      

    
    </div>
  )
}

export default Depoisit