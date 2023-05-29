
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import Dashboard from "./components/DashBoard/Dashboard";
import Login from "./components/LogIn/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

import React, { useState, useEffect } from 'react';
// import PrivateRoute from './Utils/PrivateRoute';
// import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>bla bla</p>
    </div>
  );
}
function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>ERROR: Invalid Route</p>
    </div>
  );
}
function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`https://frontend-test-api.aircall.io/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
    
      <div className="App">
        <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />    
              <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
    </div>
    
  );
}

export default App;
