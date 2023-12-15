import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;
