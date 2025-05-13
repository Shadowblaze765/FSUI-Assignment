import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask, updateTask } from '../redux/tasksSlice';
import { Link } from 'react-router-dom';

const statusColors = {
  backlog: 'secondary',
  todo: 'info',
  inprogress: 'warning',
  done: 'success',
};

function Dashboard() {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (id) => {
    if(window.confirm('Delete this task?')) {
      dispatch(deleteTask(id));
    }
  };

  const handleStatusChange = (task, e) => {
    dispatch(updateTask({ id: task._id, data: { ...task, status: e.target.value } }));
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Dashboard</h2>
      {tasks.length === 0 && <p>No tasks found.</p>}
      <div className="list-group">
        {tasks.map(task => (
          <div key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <Link to={`/task/${task._id}`}><strong>{task.title}</strong></Link>
              <p className="mb-1">{task.description}</p>
              <small>Deadline: {task.deadline ? new Date(task.deadline).toLocaleDateString() : 'N/A'}</small>
            </div>
            <div>
              <select
                className={`form-select form-select-sm me-2 bg-${statusColors[task.status]} text-white`}
                value={task.status}
                onChange={(e) => handleStatusChange(task, e)}
              >
                <option value="backlog">Backlog</option>
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
