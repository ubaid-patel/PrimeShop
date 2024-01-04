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

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:pid" element={<React.Fragment><Header/> <Product /></React.Fragment>} />
      <Route path="/checkout/:pid" element={<Checkout/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
}
export default App;
