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

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:pid" element={<React.Fragment><Header/> <Product /></React.Fragment>} />
      <Route path="/checkout/:pid" element={<Home/>} />
    </Routes>
  );
}
export default App;
