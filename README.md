# 🚀 Enterprise Employee Management System

A modern Enterprise Employee Management System built using **React, TypeScript, Material UI, Tailwind CSS, Redux Toolkit, Axios, JSON Server**, and later **Python Django REST Framework**.

---

## 📌 Project Overview

This project simulates a real-world enterprise Human Resource Management System (HRMS).

The frontend is developed first using a fake backend (JSON Server), allowing independent frontend development. In later sprints, the backend will be replaced with Django REST Framework APIs without major frontend changes.

---

## ✨ Features

- Authentication
- Dashboard
- Employee Management
- Department Management
- Attendance
- Leave Management
- Payroll
- Notifications
- Responsive Design
- Role-Based Access Control
- Dark / Light Theme
- Charts & Reports

---

## 🛠️ Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Material UI
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios

### Mock Backend

- JSON Server

### Backend (Upcoming)

- Python
- Django
- Django REST Framework
- PostgreSQL

---

## 📁 Project Structure

```text
Enterprise-Employee-Management-System/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── mocks/
│   └── package.json
│
├── server/        # Django API (Coming Soon)
│
├── docs/
│
└── README.md
```

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Client

```bash
cd client
```

### Install Dependencies

```bash
npm install
```

### Start Frontend

```bash
npm run dev
```

### Start Mock Backend

```bash
npm run mock
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| npm run dev | Start Vite Development Server |
| npm run build | Production Build |
| npm run lint | Run ESLint |
| npm run mock | Start JSON Server |

---

## 🌳 Git Workflow

### Main Branches

- `main` → Production-ready code
- `develop` → Integration branch

### Feature Branch Naming

```text
feature/EMS-XXX-feature-name
```

Example:

```text
feature/EMS-010-mock-backend
```

---

## 🗂️ Sprint Roadmap

### Sprint 0 – Foundation ✅

- Repository Setup
- React + TypeScript
- Material UI
- Tailwind CSS
- Redux Toolkit
- Axios
- JSON Server
- Husky
- README

### Sprint 1 – Authentication & Dashboard Foundation

    ### EEMS-32
    - Authentication Routing
    - Public Route
    - Protected Route
    - Unauthorized Page

    ### EEMS-33
    - Dashboard Layout
    - Header
    - Sidebar
    - Footer
    - Responsive Layout

    ### EEMS-34
    - Sidebar Navigation
    - Nested Navigation
    - Active Route Highlight
    - Responsive Drawer

    ### EEMS-35
    - Dashboard Overview
    - Welcome Card
    - Statistics Cards
    - Recent Activities
    - Analytics Placeholder

### Sprint 2 – Dashboard

- Upcoming

---

## 🏗 Architecture

The application follows a feature-based architecture.

- Feature-first folder structure
- Reusable UI components
- Shared layouts
- Centralized routing
- Redux Toolkit state management
- Modular dashboard architecture

---

## 📅 Roadmap

- Employee CRUD
- Department Management
- Attendance Module
- Leave Module
- Payroll Module
- Reports & Analytics
- Notifications
- Theme Switch
- Role-Based Permissions
- API Integration
- Unit Testing
- Docker Deployment

## 👨‍💻 Author

**Shubham Dhapade**

Software Developer | React | Angular | Python (Learning)

---

## 📄 License

This project is for learning and portfolio purposes.