import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login/Login';
import LoginAdmin from './Login/Login/LoginAdmin'
import Register from './Login/Login/Register';
import Dashboard from './user/beranda/Dashboard';
import Collection from './user/Coll/Collection';
import Detail from './user/Detail/detail';
import History from './user/History/History';
import Purchased from './user/Purschase/purchased';
import Modal from './user/Modal/modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/loginadmin' element={<LoginAdmin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/addkategori' element={<AddKategori/>}/>
        <Route path='/updateuser/:id' element={<Update/>}/>
        <Route path='/dashboarduser' element={<DashboardUser/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
