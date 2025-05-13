import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

function AddTask() {
  const [task, setTask] = useState({ title: '', description: '', deadline: '', status: 'backlog' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!task.title.trim()) {
      alert('Title is required');
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(addTask(task));
    navigate('/');
  };

  return (
    <>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit} id="addTaskForm">
        <div className="mb-3">
          <label className="form-label">Title *</label>
          <input type="text" className="form-control" name="title" value={task.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={task.description} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Deadline</label>
          <input type="date" className="form-control" name="deadline" value={task.deadline} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select className="form-select" name="status" value={task.status} onChange={handleChange}>
            <option value="backlog">Backlog</option>
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </>
  );
}

export default AddTask;
