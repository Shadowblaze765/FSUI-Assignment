const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace <your_mongo_uri> with your connection string)
mongoose.connect('<your_mongo_uri>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Task Schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['backlog', 'todo', 'inprogress', 'done'], default: 'backlog' },
  deadline: Date,
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

// CRUD API endpoints

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

// Get task by ID
app.get('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch {
    res.status(400).json({ message: 'Invalid task ID' });
  }
});

// Create task
app.post('/api/tasks', async (req, res) => {
  const { title, description, status, deadline } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const newTask = new Task({ title, description, status, deadline });
  await newTask.save();
  res.status(201).json(newTask);
});

// Update task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.json(updatedTask);
  } catch {
    res.status(400).json({ message: 'Invalid task ID' });
  }
});

// Delete task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch {
    res.status(400).json({ message: 'Invalid task ID' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
