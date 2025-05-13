# Task Management System

A full-stack task management application built with React, Redux, React Router, Bootstrap, Node.js, Express, and MongoDB.  
This app allows users to create, view, update, and delete tasks with a modern, responsive interface.

## Features

- Add, view, update, and delete tasks
- Filter tasks by status
- Responsive design for desktop and mobile
- RESTful API with CRUD operations
- State management with Redux
- Navigation using React Router
- Form validation with JavaScript/jQuery
- Modern UI with Bootstrap

## Tech Stack

### Frontend:
- React
- Redux
- React Router
- Bootstrap
- jQuery

### Backend:
- Node.js
- Express
- MongoDB
- Mongoose

### Other Tools:
- Axios (for HTTP requests)
- Nodemon (for backend development)

## Folder Structure

```
fsui-assignment/
  client/    # React frontend
  server/    # Node.js/Express backend
  README.md
  package-lock.json
```

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- MongoDB (local or MongoDB Atlas)
- A code editor such as VS Code

## Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd fsui-assignment
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

## Environment Variables
In the `server/` folder, create a file named `.env` and add the following:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Running the Application
### Start the Backend

```bash
cd server
npm run dev
```

The backend server will run at: http://localhost:5000

### Start the Frontend
Open a new terminal:

```bash
cd client
npm start
```

The frontend React app will run at: http://localhost:3000

## API Endpoints
- GET /api/tasks - Get all tasks
- GET /api/tasks/:id - Get a task by ID
- POST /api/tasks - Create a new task
- PUT /api/tasks/:id - Update a task
- DELETE /api/tasks/:id - Delete a task

## Usage
- Open the app in your browser
- Use the Dashboard to view all tasks
- Add a new task using the "Add Task" page
- Click on a task to view its details
- Update the status directly from the Dashboard
- Delete tasks when no longer needed

## Deployment
- Deploy your backend (Node.js/Express) to Render or Heroku
- Deploy your frontend (React) to Netlify or Vercel
- Update the API base URL in the frontend code to match your deployed backend

## Troubleshooting
- If npm scripts don't run in PowerShell, set the execution policy:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

- If MongoDB connection fails:
  - Check your connection string
  - Ensure MongoDB is running or your Atlas cluster is online
- If the frontend cannot connect to the backend:
  - Ensure both servers are running
  - Verify that API base URLs match

## License
This project is provided for educational purposes. Feel free to customize this README with your name, screenshots, or any additional information.
