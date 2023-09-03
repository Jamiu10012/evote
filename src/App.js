import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Manifesto from "./Pages/Manifesto";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manifesto" element={<Manifesto />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
