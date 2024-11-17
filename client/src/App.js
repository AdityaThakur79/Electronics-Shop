import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header/Header.js";
import Footer from "./components/layouts/footer/Footer.js";
import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/ContactUs.js";
import AllProducts from "./pages/AllProducts.js";
import Cart from "./pages/Cart.js";
import NoPageFound from "./pages/NoPageFound.js";

import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard.js";
import Profile from "./pages/user/Profile.js";
import Orders from "./pages/user/Orders.js";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Private from "./Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Herosection from "./components/layouts/Herosection/Herosection.js";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import CreateProduct from "./pages/Admin/AddProduct.js";
import Users from "./pages/Admin/Users.js";
import AdminRoutes from "./Routes/AdminRoutes.js";
import AdminProduct from "./pages/Admin/AllProducts.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Private />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/orders" element={<Orders />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoutes />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/users" element={<Users />} />
            <Route path="admin/products" element={<AdminProduct />} />
            <Route path="admin/product/:slug" element={<UpdateProduct />} />
          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
