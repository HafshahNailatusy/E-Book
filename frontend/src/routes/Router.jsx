import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import LoadingSpinner from "../components/Loading";
// import BookDetail from "../Pages/Order/BookDetail";

const Login = lazy(() => import("../Pages/Login/Login"));
const LoginAdmin = lazy(() => import("../Pages/Login/LoginAdmin"));
const Register = lazy(() => import("../Pages/Login/Register"));
const DashboardUser = lazy(() => import("../Pages/Dashboard"));
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage"));
const ForbiddenPage = lazy(() => import("../Pages/ForbiddenPage"));
const Aplikasi = lazy(() => import("../Pages/Books"));
const BookDetail = lazy(()=>import("../Pages/Order/Beli"));
const User = lazy(() => import("../Pages/User"));
const Transaksi = lazy(() => import("../Pages/Transaction"));
const Profile = lazy(() => import("../Pages/Profile"));
const History = lazy(() => import("../Pages/History"));
const Order = lazy(() => import("../Pages/Order"));
const ErrorPage = lazy(() => import("../Pages/ErrorPage"));
const TransaksiUser = lazy(() => import("../Pages/TransactionUser"));

const Router = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<DashboardUser />} />

        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />

        <Route
          path="/transaksi"
          element={
            <ProtectRoute>
              <TransaksiUser />
            </ProtectRoute>
          }
        />

        <Route
          path="/histori"
          element={
            <ProtectRoute>
              <History />
            </ProtectRoute>
          }
        />

        <Route
          path="/bookDetail/:id"
          element={
            <ProtectRoute>
             <BookDetail/>
            </ProtectRoute>
          }
        />

        <Route
          path="/pesan"
          element={
            <ProtectRoute>
              <Order />
            </ProtectRoute>
          }
        />

        <Route
          path="/admin/buku"
          element={
            <AdminRoute>
              <Aplikasi />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/user"
          element={
            <AdminRoute>
              <User />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/transaksi"
          element={
            <AdminRoute>
              <Transaksi />
            </AdminRoute>
          }
        />

        <Route path="/error" element={<ErrorPage />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
