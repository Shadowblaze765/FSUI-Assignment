import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Task Manager</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Dashboard</Link>
            <Link className="nav-link" to="/add-task">Add Task</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
