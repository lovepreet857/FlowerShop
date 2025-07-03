import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/common/footer.jsx";
import Category from "./pages/Category.jsx";
import Product from "./pages/Product.jsx";
import Subscription from "./pages/Subscription.jsx";
import About from "./pages/About.jsx";
import Chackout from "./pages/Chackout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<Category/>} />
          <Route path="product" element={<Product/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="subscription" element={<Subscription/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="chackout" element={<Chackout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
