import React from "react";
import { Navigate, Route, BrowserRoute as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import './styles/main.scss';

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
