import type { ReactNode } from "react";

export type EmploymentType =
  | "Full Time"
  | "Part Time"
  | "Contract"
  | "Intern";

export type EmployeeStatus =
  | "Active"
  | "Inactive"
  | "On Leave";

export interface EmployeeAddress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface Employee {
  id: string;

  employeeId: string;

  firstName: string;

  lastName: string;

  email: string;

  phone: string;

  avatar?: string;

  gender: "Male" | "Female" | "Other";

  dateOfBirth: string;

  joiningDate: string;

  department: string;

  designation: string;

  manager: string;

  employmentType: EmploymentType;

  status: EmployeeStatus;

  salary: number;

  address: EmployeeAddress;
}

export interface EmployeeStat {
  title: string;

  value: number;

  icon?: ReactNode;

  color?: string;
}