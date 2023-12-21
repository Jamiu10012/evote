import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Manifesto from "./Pages/Manifesto";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/Signup";
import { Routes, Route } from "react-router-dom";
import Vote from "./Pages/Vote";
import AdminDash from "./Pages/Admin";
import CreatePolls from "./Pages/CreatePoll";
import Result from "./Pages/Result";
import ResultOut from "./Pages/ResultOut";
import Election from "./Pages/Election";

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
        <Route path="/vote" element={<Vote />} />
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/election" element={<Election />} />
        <Route path="/createpoll" element={<CreatePolls />} />
        <Route path="/result" element={<Result />} />
        <Route path="/resultout" element={<ResultOut />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
