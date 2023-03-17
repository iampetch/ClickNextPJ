import React from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Navbar from './Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, datetime, from, action,amount,remain) {
    return { name, datetime, from, action,amount,remain };
  }
  
  const rows = [
    createData('Took', "10/03/2023", 'Rutchanon', 'Receive', 500,3000),
    createData('Ton', "11/03/2023", 'Rutchanon', 'Receive', 500,2500),
    createData('Tor', "12/03/2023", 'Rutchanon', 'Receive', 100,2000),
    createData('Tong', "13/03/2023", 'Rutchanon', 'Receive', 100,1900)
  
];

function ReceiveMenu() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();}
  const theme = createTheme();

  const Login = () =>{
    localStorage.removeItem('token')
    navigate('/')
   }
   return (
    <div>
    <Navbar />
    <ThemeProvider theme={theme}>
      <Container component="main" >
        <CssBaseline />
        <Typography variant="h5" sx={{ m: 2}}>
            Transfer Page
          </Typography>
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >User</TableCell>
            <TableCell align="right">Datetime</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Remain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.datetime}</TableCell>
              <TableCell align="right">{row.from}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.remain}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={Login}
            >
              Go back
            </Button>
    </Box>
      </Container>
    </ThemeProvider>

    
    </div>
  )
}

export default ReceiveMenu