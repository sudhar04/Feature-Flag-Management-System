# 🚀 Feature Flag Management System

A Full Stack Feature Flag Management System built using **React.js, Node.js, Express.js, MongoDB, JWT Authentication, Axios, and Tailwind CSS**.

This application allows administrators to create, manage, enable/disable, search, filter, and delete feature flags through a secure dashboard.

---


# ✨ Features

## Authentication

- JWT Login Authentication
- Protected Routes
- Logout Functionality
- Token stored in Local Storage

---

## Dashboard

- Display all Feature Flags
- Total Features Counter
- Enabled Features Counter
- Disabled Features Counter

---

## Feature Management

- Create New Feature
- Toggle Feature Status
- Delete Feature
- Search Feature
- Filter Enabled Features
- Filter Disabled Features

---

## UI

- Responsive Dashboard
- Sidebar Navigation
- Top Navbar
- Loading Spinner
- Toast Notifications

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Context API
- Tailwind CSS
- React Hot Toast

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

# 📂 Project Structure

```
Feature-Flag-Management-System
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/sudhar04/Feature-Flag-Management-System.git
```

---

## Backend

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run backend

```bash
npm run dev
```

Server runs at

```
http://localhost:5000
```

---

## Frontend

```bash
cd frontend

npm install
```

Run frontend

```bash
npm run dev
```

Application runs at

```
http://localhost:5173
```

---

# 🔗 API Endpoints

## Authentication

```
POST /api/auth/login
```

---

## Features

```
GET    /api/features

POST   /api/features

PATCH  /api/features/:id/toggle

DELETE /api/features/:id
```

---

# 🔐 Authentication Flow

1. User logs in.
2. Backend validates credentials.
3. JWT Token is generated.
4. Token stored in Local Storage.
5. Axios sends token in Authorization Header.
6. Protected Routes verify token.
7. User accesses Dashboard.

---

# 📋 Application Flow

```
Login

↓

Dashboard

↓

Fetch Features

↓

Display Cards

↓

Create Feature

↓

Update Dashboard

↓

Toggle Feature

↓

Delete Feature
```

---

# 🧠 Learning Outcomes

This project helped me understand:

- React Hooks
- Context API
- React Router
- Protected Routes
- Axios
- JWT Authentication
- Express.js
- MongoDB
- Mongoose
- CRUD Operations
- REST API Design
- Folder Structure
- Tailwind CSS
- Component Reusability

---

# 🐞 Debugging Guide

## Backend not starting

Check

```
MONGO_URI

JWT_SECRET

PORT
```

---

## MongoDB Connection Error

Verify

```
MongoDB Atlas Running

IP Whitelist

Database User

Connection String
```

---

## Invalid Token

Check

```
Login Again

Local Storage Token

Authorization Header
```

---

## 401 Unauthorized

Verify

```
Bearer Token

JWT Secret

Token Expiration
```

---

## CORS Error

Enable

```javascript
app.use(cors())
```

---

## Frontend not loading API

Check

```
axios baseURL

Backend Running

Correct Port
```

---

## npm install Error

Delete

```
node_modules
package-lock.json
```

Then

```bash
npm install
```

---

## Tailwind CSS not working

Verify

```
tailwind.config.js

index.css

@tailwind directives
```

---

## Feature not updating

Check

```
MongoDB Data

PATCH API

Frontend refreshFeatures()
```

---

# 🚀 Future Improvements

- Organization Management
- User Roles
- Pagination
- Charts
- Activity Logs
- Feature Scheduling
- Dark Mode
- Audit History
- Feature Categories
- Search by Organization

---

# 👨‍💻 Author

**Sudharsanan R**

Frontend / Full Stack Developer

GitHub:

https://github.com/sudhar04

---

# ⭐ If you found this project useful,

Please consider giving it a ⭐ on GitHub.
