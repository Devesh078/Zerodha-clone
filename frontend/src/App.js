import { Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import SignupPage from "./landing_page/signup/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Hidden auth */}
      <Route path="/__auth" element={<Login />} />

      {/* Protected dashboard */}
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  );
}

export default App;
