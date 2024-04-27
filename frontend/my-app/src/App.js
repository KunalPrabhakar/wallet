import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/signup";
import { Signin } from "./pages/signin";
import { Dashboard } from "./pages/dashboard";
import { SendMoney } from "./pages/sendmoney";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
