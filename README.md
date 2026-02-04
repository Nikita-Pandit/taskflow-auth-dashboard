# TaskFlow – Auth & Dashboard Application

A full-stack web application built as part of the Frontend Developer Intern assignment.  
The app provides secure authentication, a protected dashboard, user profile management, and CRUD functionality for tasks with a clean and responsive UI.

---

## 🚀 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for password hashing

---

## 📦 Features

- User Signup & Login (JWT-based authentication)
- Protected Dashboard (accessible only after login)
- View & Update User Profile
- Task Management (Create, Read, Update, Delete)
- Search & Filter Tasks
- Logout Flow
- Responsive and clean UI with subtle animations

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone <your-github-repo-url>
cd <repo-name>

```
### 2️⃣ Backend Setup
```bash
cd backend
npm install

Create a .env file in the backend folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend server:
npm run dev

Backend runs on:
http://localhost:5000
```
### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173
```
## 🔐 API Endpoints

### Auth
```bash
POST /api/v1/auth/signup
POST /api/v1/auth/login
```
### Profile
```bash
GET /api/v1/me
PUT /api/v1/me
```
### Tasks
```bash
GET /api/v1/tasks
POST /api/v1/tasks
PUT /api/v1/tasks/:id
DELETE /api/v1/tasks/:id
```

## 🧪 Demo Credentials (Optional)
You can create demo users using the signup page, or use seeded credentials if added.
```bash
Example

Email: demo@example.com
Password: Demo@123
```
## 📑 API Documentation
```bash
Postman collection included in the repository
OR
Swagger/OpenAPI can be added for API exploration
```
## 📈 How Would You Scale This for Production?
To scale this application for production, the frontend and backend would be deployed separately using platforms like Vercel and AWS. Environment variables would be managed securely using secrets. Proper CORS configuration would be applied, and database indexing would be added for frequently queried fields. Pagination and caching (e.g., Redis) would be implemented to handle large datasets efficiently. Rate limiting and refresh tokens would improve security, while CI/CD pipelines would automate testing and deployment.

## 👤 Author
Nikita Pandit
Frontend Developer Intern Candidate



