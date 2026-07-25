# 🚀 Lead Management System

A full-stack Lead Management System built with the **MERN Stack** that allows customers to submit inquiries through a landing page while providing administrators with a secure dashboard to manage leads efficiently.

## 🌐 Live Demo

### Customer Portal
🔗 https://lead-management-system-iota-flame.vercel.app/

### Admin Portal
🔗 https://lead-management-system-iota-flame.vercel.app/admin/login

**Demo Credentials**

- **Email:** admin@test.com
- **Password:** Admin123

> **Note:** If you change the demo password during testing, please set it back to **Admin123** before leaving.

---

# ✨ Features

## Customer Side

- Responsive landing page
- Lead submission form
- Form validation
- Success notification after submission
- Mobile-friendly UI

## Admin Side

- Secure Admin Authentication
- Dashboard overview
- View all leads
- Search leads
- Filter leads
- Update lead status
- Delete leads
- Profile management
- Change password
- Logout functionality

---

# 🛠 Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- Cookie Parser
- CORS

### Deployment

- Frontend → Vercel
- Backend → Vercel
- Database → MongoDB Atlas

---

# 📁 Project Structure

```
Lead-Management-System
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── api
│   ├── src
│   ├── package.json
│   └── vercel.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/lead-management-system.git
```

Go inside project

```bash
cd lead-management-system
```

---

# Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

Run backend

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd client

npm install
```

Create `.env.development`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend

```bash
npm run dev
```

---

# Production Environment

Create

```
.env.production
```

```env
VITE_API_URL=https://your-backend-url.vercel.app/api
```

---

# Authentication

Authentication is implemented using:

- JWT
- HTTP Only Cookies
- Protected Routes
- bcrypt Password Hashing

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/login` | Admin Login |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/auth/me` | Current Admin |
| PUT | `/api/auth/profile` | Update Profile |
| PUT | `/api/auth/change-password` | Change Password |

---

## Leads

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/leads` | Create Lead |
| GET | `/api/leads` | Get All Leads |
| GET | `/api/leads/:id` | Get Single Lead |
| PUT | `/api/leads/:id` | Update Lead |
| DELETE | `/api/leads/:id` | Delete Lead |

---

# Security

- Password Hashing using bcrypt
- JWT Authentication
- HTTP Only Cookies
- Protected API Routes
- CORS Configuration
- Environment Variables

---


# Future Improvements

- Email Notifications
- Lead Assignment
- Analytics Dashboard
- CSV Export
- Role-Based Access
- Activity Logs
- Pagination
- Dark Mode

---

# Author

**Anik Aryan**

GitHub: https://github.com/anik-aryan

LinkedIn: http://www.linkedin.com/in/anikaryan

---

# License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, don't forget to give it a Star on GitHub!