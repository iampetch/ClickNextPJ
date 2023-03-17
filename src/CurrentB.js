import React from 'react'
import { useNavigate } from 'react-router-dom';
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
import Login from './Login';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


function CurrentB() {

    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();}
    const theme = createTheme();
  
    const navigator = useNavigate();
  
    const Login = () => {
      localStorage.removeItem('token')
      navigate('/')
    }
  
    return (
      <div>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1 ,bgcolor: 'secondary.main'}}>
          
            </Avatar>
            <Typography component="h1" variant="h5">
              Current balance
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
  
            <Card sx={{ minWidth: 300 , boxShadow: 1,
            borderRadius: 2, mt: 2, mb: 3}}>
        <CardContent style={{backgroundColor: "green" ,}}>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Spen
          </Typography>
          <Typography variant="h5" component="div">
            xxx-x-x3626-x
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            1,250 Bath
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 200 , boxShadow: 1,
            borderRadius: 2}}>
        <CardContent style={{backgroundColor: "red" ,}}>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Pay
          </Typography>
          <Typography variant="h5" component="div">
            xxx-x-x3626-x
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            10,000 Bath
          </Typography>
        </CardContent>
      </Card>
  
           
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={Login}
              >
                Confirm
              </Button>
            </Box>
          </Box>
          
        </Container>
      </ThemeProvider>
      </div>
    );
  }

export default CurrentB