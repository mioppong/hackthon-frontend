import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/Homepage";
import Inventory from "./screens/Inventory";
import Login from "./screens/Login";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  );
}

export default App;
