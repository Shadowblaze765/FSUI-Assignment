import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks/${id}`)
      .then(res => setTask(res.data))
      .catch(() => alert('Task not found'));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <>
      <h2>Task Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description || 'No description'}</p>
          <p><strong>Status:</strong> {task.status}</p>
          <p><strong>Deadline:</strong> {task.deadline ? new Date(task.deadline).toLocaleDateString() : 'N/A'}</p>
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
