import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clock from './components/clock';
import Settings from "./components/settings";
import Alarm from './components/alarm';

function App() {
  return (
    <Router>
      <div>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/alarm" element={<Alarm />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;