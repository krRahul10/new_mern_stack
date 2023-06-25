import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import Headers from "./components/Headers/Headers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Profile />} />
        <Route path="/userprofile/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
