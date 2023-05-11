import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import "./App.css"


function App() {
  return (
    <div className='app'>
      <Router>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <h1 >Go to Home page</h1>
          <br />
          <br />
          </Link>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/users" element={<ListUsers />} />
          <Route exact path="/create-user" element={<CreateUser />} />
          <Route exact path="/edit-user/:id" element={<EditUser />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/edit-profile/:id" element={<EditProfile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
