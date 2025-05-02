# Task-management-service

A simple Node.js REST API with user authentication using JWT, task CRUD operations, and MongoDB integration.

## Features

- ✅ User Registration and Login with JWT Authentication  
- ✅ Task Create, Read, Update, Delete (CRUD)  
- ✅ MongoDB connection with Mongoose  
- ✅ Environment variables support via `.env`  
- ✅ Built with the latest Node.js  

## Prerequisites

- [Node.js](https://nodejs.org/) (Latest)
- [MongoDB](https://www.mongodb.com/) instance (local or cloud)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following contents:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_jwt_secret_key
```

> Replace `your-db-name` and `your_jwt_secret_key` with your actual values.

### 4. Start the server

```bash
npm start
```

The server will start on `http://localhost:8080`.

## API Endpoints

### Auth Routes

- `POST /api/user/register` – Register a new user  
- `POST /api/user/login` – Login and receive JWT  

### Task Routes (Protected)

- `GET /api/tasks` – Get all tasks  
- `POST /api/tasks` – Create a new task  
- `PUT /api/tasks/:id` – Update a task  
- `DELETE /api/tasks/:id` – Delete a task  

> Use the JWT token in `Authorization` header as `<token>` for protected routes.

