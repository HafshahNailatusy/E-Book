import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Pages/Login/Register';
import Collection from './user/Coll/Collection';
import Detail from './user/Detail/detail';
import History from './user/History/History';
import Purchased from './user/Purschase/purchased';
import Login from './Pages/Login/Login';
import Modal from './user/Modal/modal';
import LoginAdmin from './Pages/Login/LoginAdmin';
import User from './admin/Pages/UserAdmin'


// const Layout = () => (
//   <>
//     <Sidebar />
//     <main>
//       <Outlet />
//     </main>
//   </>
// );


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/userPanel' element={<User />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/history" element={<History />} />
        <Route path="/purchase" element={<Purchased />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/admin" element={<LoginAdmin />} />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/home' element={
            <Homepage />
          } />
          <Route path='/orders' element={
            <Orders />
          } />
          <Route path='/orders/:orderId' element={
            <OrderPage />
          } />
          <Route path='/clients' element={
            <Clients />
          } />
          <Route path='/clients/:clientId' element={
            <ClientPage />
          } />
          <Route path='/calendar' element={
            <CalendarEvents />
          } />
          <Route path='/adminPanel' element={
            <AdminPanel />
          } />
        </Route>
        <Route path='/admin' element={
          <LoginAdmin />
        } />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
