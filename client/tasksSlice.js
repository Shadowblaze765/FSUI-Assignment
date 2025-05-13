import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

// Async thunks for API calls
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async ({ id, data }) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => { state.loading = true; })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.unshift(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(t => t._id === action.payload._id);
        if (index !== -1) state.tasks[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(t => t._id !== action.payload);
      });
  }
});

export default tasksSlice.reducer;
