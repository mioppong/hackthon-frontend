import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/Homepage";
import Login from "./screens/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
