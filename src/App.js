//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import { Routes, Route  } from 'react-router-dom';
import Depoisit from './Depoisit';
import Withdraw from './Withdraw';
import Transfers from './Transfers';
import CurrentB from './CurrentB';
import TransferMenu from './TransferMenu';
import ReceiveMenu from './ReceiveMenu';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Depoisit' element={<Depoisit/>} />
      <Route path='/Withdraw'  element={<Withdraw/>} />
      <Route path='/Transfers'  element={<Transfers/>} />
      <Route path='/CurrentB'  element={<CurrentB/>} />
      <Route path='/TransferMenu'  element={<TransferMenu/>} />
      <Route path='/ReceiveMenu'  element={<ReceiveMenu/>} />
      </Routes>
    </div>
  );
}

export default App;
