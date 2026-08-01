# Enterprise Employee Management System (EEMS)

# Project Architecture

Version: 1.0

---

# Purpose

This document defines the project architecture, folder structure,
coding standards, and development guidelines.

All future development must follow this document.

---

# Tech Stack

Frontend
- React 19
- TypeScript
- Vite

UI
- Material UI
- Tailwind CSS

State Management
- Redux Toolkit

API
- Axios

Validation
- React Hook Form
- Zod

Mock API
- JSON Server

Code Quality
- ESLint
- Prettier
- Husky
- lint-staged

---

# Folder Structure

src/

    app/
    assets/
    components/
    config/
    constants/

    features/

    hooks/
    layouts/
    mocks/
    pages/

    services/

    styles/
    types/
    utils/

---

# Shared Services

src/services

Contains application-wide reusable services.

Example

services/

    api/
        axiosClient.ts
        endpoints.ts
        interceptors.ts
        index.ts

    repository/

    mock/

    employeeService.ts
    attendanceService.ts
    payrollService.ts
    departmentService.ts

---

# Feature Structure

Every feature must follow the same structure.

Example

features/auth

    api/
    components/
    constants/
    hooks/
    layouts/
    pages/

    redux/

    schemas/
    services/
    store/
    types/
    utils/

    index.ts

Future modules

employees
attendance
departments
dashboard
payroll

must follow exactly the same pattern.

---

# Layer Responsibilities

Component

↓

Redux

↓

Service

↓

API

↓

Axios Client

↓

Backend

---

# API Layer

Responsible only for HTTP requests.

Never contains business logic.

Example

authApi.login()

employeeApi.create()

departmentApi.update()

---

# Service Layer

Responsible for

Business logic

Data transformation

Calling multiple APIs

Preparing data for Redux

No UI code.

---

# Redux Layer

Responsible only for application state.

No HTTP requests.

HTTP requests must always be delegated to Services.

---

# Shared Components

Global reusable components belong in

src/components

Examples

Button

Input

Loader

Modal

Table

Dialog

---

# Feature Components

Components used only inside one feature belong inside

features/<feature>/components

---

# Pages

Each feature owns its pages.

Example

features/auth/pages

features/employees/pages

---

# Types

Feature-specific types

features/auth/types

Shared types

src/types

---

# Hooks

Reusable application hooks

src/hooks

Feature hooks

features/auth/hooks

---

# Constants

Feature constants

features/auth/constants

Shared constants

src/constants

---

# Validation

Every form must use

React Hook Form

+

Zod

---

# API Naming

axiosClient

API_ENDPOINTS

authApi

employeeApi

departmentApi

attendanceApi

---

# Service Naming

authService

employeeService

attendanceService

departmentService

payrollService

---

# Redux Naming

authSlice

authThunk

employeeSlice

employeeThunk

---

# Import Rules

Always use relative imports inside features.

Shared utilities should come from src.

Never duplicate business logic.

---

# Git Flow

main

↓

develop

↓

feature/EMS-XXX-task-name

↓

Pull Request

↓

develop

Release

↓

main

---

# Commit Format

EMS-028 feat(auth): create login UI

EMS-031 feat(auth): integrate authentication

EMS-040 feat(employee): employee CRUD

---

# Pull Request

Every PR must contain

Summary

Screenshots

Testing

Linked Issue

Checklist

---

# Branch Naming

feature/EMS-028-login-ui

feature/EMS-031-authentication

feature/EMS-041-employee-crud

---

# Coding Standards

Use TypeScript strict mode.

Never use any.

Prefer interfaces for API contracts.

Use readonly whenever possible.

Always export through index.ts.

---

# Future Modules

Authentication

Dashboard

Employees

Departments

Attendance

Payroll

Leave

Notifications

Reports

Settings

Audit Logs

---

This document is the official architecture reference for the Enterprise Employee Management System.