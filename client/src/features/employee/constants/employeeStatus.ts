import type { EmployeeStatus, EmploymentType } from "../types/employee.types";

export const EMPLOYEE_STATUS: EmployeeStatus[] = [
  "Active",
  "Inactive",
  "On Leave",
];

export const EMPLOYMENT_TYPES: EmploymentType[] = [
  "Full Time",
  "Part Time",
  "Contract",
  "Intern",
];

export const EMPLOYEE_STATUS_COLOR: Record<EmployeeStatus, string> = {
  Active: "#2e7d32",
  Inactive: "#757575",
  "On Leave": "#ed6c02",
};