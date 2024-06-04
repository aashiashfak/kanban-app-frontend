import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
