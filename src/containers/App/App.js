import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

function App() {
  return (
    <Router>
      <NavBar />
     
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
