import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/Homepage";
import Inventory from "./screens/Inventory";
import Login from "./screens/Login";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>

    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
    </Provider>

  );
}

export default App;
