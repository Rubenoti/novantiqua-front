import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import './styles/_main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
