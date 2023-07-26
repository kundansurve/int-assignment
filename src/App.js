import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth";
import DashBoard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/dash-board" element={<DashBoard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
