import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//import * as React from 'react';
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
import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Depoisit from './Depoisit';
import Withdraw from './Withdraw';
import Transfers from './Transfers';
import Navbar from './Navbar';
import User from './User';

function Profile() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + token);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/auth/user", requestOptions)
  .then(response => response.json())
  .then(result => { 
    if (result.status === "ok"){
      setUser(result.user)
      setIsLoaded(false)
    } else if(result.status === 'forbidden') {
      MySwal.fire({
        html: <i>{result.message}</i>,
        icon: 'error'
      }).then((value) => {
        navigate('/')
      })
      
    }
    console.log(result)
  })
  .catch(error => console.log('error', error));
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const depoisit = () => {
    localStorage.removeItem('token')
    navigate('/depoisit')
  }

  const withdraw = () => {
    localStorage.removeItem('token')
    navigate('/withdraw')
  }

  const Transfers = () => {
    localStorage.removeItem('token')
    navigate('/transfers')
  }

  
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if(isLoaded) return(<div>Loading</div>)
  else {
  return (
      <div>
        <Navbar />
        <User />
        
      
      
      
    </div>
  )
  }
}

export default Profile