import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Depoisit from './Depoisit';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Withdraw from './Withdraw';
import Transfers from './Transfers';
import CurrentB from './CurrentB';
import Stack from '@mui/material/Stack';
import TransferMenu from './TransferMenu';
import Login from './Login';




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function User() {
  const navigate = useNavigate(); 
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) =>{
          setItems(result);
        },
      )
  }, [])

  
  const Depoisit = () => {
    localStorage.removeItem('token')
    navigate('/depoisit')
  }

  const Withdraw = () => {
    localStorage.removeItem('token')
    navigate('/withdraw ')
  }

  const Transfer= () => {
    localStorage.removeItem('token')
    navigate('/transfers ')
  }

  const CurrentB= () => {
    localStorage.removeItem('token')
    navigate('/currentb ')
  }

  const TransferMenu= () => {
    localStorage.removeItem('token')
    navigate('/TransferMenu ')
  }

  const ReceiveMenu= () => {
    localStorage.removeItem('token')
    navigate('/ReceiveMenu ')
  }

  const Login = () => {
    localStorage.removeItem('token')
    navigate('/')
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p : 2}}>
        <Paper sx ={ {p:2} }>
        <Box display="flex">
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
            Rutchanon 
            </Typography>
      </Box>
          <Box > 
            
            <Button variant="contained" onClick={Depoisit}>Depoisit</Button>
            <Button variant="contained" onClick={Withdraw}>Withdraw</Button>
            <Button variant="contained" onClick={Transfer}>Transfer</Button>
            <Button variant="contained" onClick={CurrentB}>current balance</Button>
            </Box>
        </Box>
        <TableContainer component={Paper}>
    </TableContainer>

        </Paper>
        
      
      </Container>
      
      <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

      <Stack spacing={2} direction="row">
      
      <Button variant="contained" onClick={TransferMenu}>Transfer Menu</Button>
      <Button variant="contained"onClick={ReceiveMenu}>Receive Menu</Button>
    </Stack>

    </Box>

    <Box
          sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography  variant="h3">
            Click next Project
          </Typography>

          </Box>
    <Box
          sx={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Button variant="contained" color="error" onClick={Login}>Log out</Button>

        </Box>

    </React.Fragment>
    
    
  );
}