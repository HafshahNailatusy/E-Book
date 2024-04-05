import './App.css';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Pages/Login/Register';
import LoginAdmin from './Pages/Login/LoginAdmin';
import Add from './admin/user/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/loginadmin' element={<LoginAdmin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/adduser' element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
