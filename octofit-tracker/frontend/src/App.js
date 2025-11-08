
import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <img src="/octofitapp-small.svg" alt="OctoFit Logo" className="octofit-logo" />
          <NavLink className="navbar-brand text-white" to="/">OctoFit Tracker</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink className="nav-link text-white" to="/activities">Activities</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white" to="/leaderboard">Leaderboard</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white" to="/teams">Teams</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white" to="/users">Users</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white" to="/workouts">Workouts</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-center text-primary">OctoFit Tracker Dashboard</h1>
            <Routes>
              <Route path="/activities" element={<Activities />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/users" element={<Users />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/" element={<Activities />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
