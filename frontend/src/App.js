import './App.css';
import Login from './Pages/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Pages/Login/Register';
import LoginAdmin from './Pages/Login/LoginAdmin';
import AddUser from './admin/user/Add';
import AddKategori from './admin/kategori/Add';
import Update from './admin/user/Update';
import DashboardUser from './user/DashboardUser';


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
