import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { allProductAPI } from "./utils/constant"

import './App.css';
import UserLayout from './layout/Userlayout';
import Home from './pages/user/Home';
import Category from "./pages/user/Category";
import ProductsLayout from "./pages/user/Products/ProductsLayout";
import Drone from "./pages/user/Products/Drone";
import Booking from "./pages/user/Booking";
import axios from "./utils/axiosInstance";
import PageNotFound from "./components/user/PageNotFound";
import Blogs from "./pages/user/Blogs";
import Login from "./pages/admin/login";
import BookingAdmin from "./pages/admin/booking";
import CategoryAdmin from "./pages/admin/category";
import OrdersAdmin from "./pages/admin/orders";
import BlogsAdmin from "./pages/admin/blogs";
import ProductsAdmin from "./pages/admin/products";
import BookingTwo from "./components/admin/booking copy/BookingOne";
import Dashboard from "./pages/admin/Dashboard";
import ScrollToTop from "./pages/user/ScrollToTop";
import AdminGallery from "./pages/admin/Gallery";

import About from "./components/user/home/About";
import Services from "./components/user/home/Services";
import Gallery from "./pages/user/Gallery";

import AuthContext from "./context/AuthProvider";


function App() {
  const [products, setProducts] = useState([]);

  const { auth } = useContext(AuthContext);

  console.log(auth)

  const product = () => {
    axios.get(allProductAPI).then((res) => {
      setProducts(res?.data?.products);
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    product()
  }, [])

  useEffect(() => {
    auth?.message && Navigate('/admin/dashboard');
  },[])


  return (
    <div className="App bg-black text-white">
      <ScrollToTop />

      <Routes>
        {/* USER ROUTER */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="category" element={<Category />} />
          <Route path="category/products" element={<ProductsLayout updateProduct={setProducts} />}>
            <Route index element={<Drone productData={products} />} />
          </Route>
          <Route path="booking" element={<Booking />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

        {
          auth?.message ? (
            <>
              <Route path="/admin/category" element={<CategoryAdmin />} />
              <Route path="/admin/products" element={<ProductsAdmin />} />
              <Route path="/admin/orders" element={<OrdersAdmin />} />
              <Route path="/admin/blogs" element={<BlogsAdmin />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/gallery" element={<AdminGallery />} />
              <Route path="/admin/bookingscheduled" element={<BookingTwo />} />
              <Route path="/admin/bookings" element={<BookingAdmin />} />
            </>
          ) : (
            <Route path="/admin/login" element={<Login />} />
          )
        }

        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;

