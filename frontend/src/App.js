import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Login from './Pages/Login/Login';
// import LoginAdmin from './Pages/Login/LoginAdmin'
// import Register from './Pages/Login/Register';
// import Dashboard from './user/beranda/Dashboard';
// import Collection from './user/Coll/Collection';
// import Detail from './user/Detail/detail';
// import History from './user/History/History';
// import Purchased from './user/Purschase/purchased';
// import Modal from './user/Modal/modal';
import Homepage from './admin/Pages/Homepage';
import Orders from './admin/Pages/Orders';
import OrderPage from './admin/Pages/OrderPage';
import Clients from './admin/Pages/Clients';
import ClientPage from './admin/Pages/ClientPage';
import CalendarEvents from './admin/Pages/CalendarEvents';
import AdminPanel from './admin/Pages/AdminPanel';
import PrivateRoute  from './admin/AuthComponents/PrivateRoute';
import LoginRoute  from './admin/AuthComponents/LoginRoute';
import AdminRoute  from './admin/AuthComponents/AdminRoute';
import Sidebar from './admin/Components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginAdmin from './admin/Pages/Login';


const Layout = () => (
  <>
    <Sidebar />
    <main>
      <Outlet />
    </main>
  </>
);


function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/loginadmin' element={<LoginAdmin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/history" element={<History />} />
        <Route path="/purchase" element={<Purchased />} />
        <Route path="/modal" element={<Modal />} />

      </Routes> */}
     
      <Routes>
      <Route path="/" element={<Layout />}>


        <Route path='/home' exact element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        } />
        <Route path='/orders' element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        } />
        <Route path='/orders/:orderId' element={
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        } />
        <Route path='/clients' element={
          <PrivateRoute>
            <Clients />
          </PrivateRoute>
        } />
        <Route path='/clients/:clientId' element={
          <PrivateRoute>
            <ClientPage />
          </PrivateRoute>
        } />
        <Route path='/calendar' element={
          <PrivateRoute>
            <CalendarEvents />
          </PrivateRoute>
        } />
        <Route path='/adminPannel' element={
          <AdminRoute>
            <AdminPanel />
          </AdminRoute>
        } />
              </Route>
        <Route path='/login' element={
          <LoginRoute>
            <Login />
          </LoginRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
