import { useEffect } from "react";
import React from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import styles from './css/pages/app.module.css'
import Account from "./pages/Account";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:pid" element={<div className={styles.product}><Product/></div>} />
      <Route path="/checkout/:pid" element={<div className={styles.checkout}><Checkout/></div>} />
      <Route path="/login" element={<div className={styles.login}><Login/></div>} />
      <Route path="/signup" element={<div className={styles.signup}><Signup/></div>} />
      <Route path="/cart" element={<div className={styles.cart}><Cart/></div>} />
      <Route path="/products" element={<div className={styles.products}><Products/></div>} />
      <Route path="/account/:page" element={<div className={styles.account}><Account/></div>} />
    </Routes>
  );
}
export default App;
