import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Lista } from "./pages/lista.jsx";
import { Ficha } from "./pages/ficha.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/ficha/:id" element={<Ficha />} />
      </Routes>
    </Router>
  );
}

export default App;