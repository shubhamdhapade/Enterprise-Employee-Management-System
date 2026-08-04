import type { Employee } from "../types/employee.types";

/**
 * Returns employee full name.
 */
export const getEmployeeFullName = (employee: Employee): string => {
  return `${employee.firstName} ${employee.lastName}`;
};

/**
 * Returns employee initials.
 */
export const getEmployeeInitials = (employee: Employee): string => {
  return `${employee.firstName.charAt(0)}${employee.lastName.charAt(0)}`.toUpperCase();
};

/**
 * Formats salary in Indian Rupees.
 */
export const formatSalary = (salary: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(salary);
};

/**
 * Formats ISO date into DD MMM YYYY.
 */
export const formatDate = (date: string): string => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

/**
 * Returns employee age.
 */
export const calculateAge = (dateOfBirth: string): number => {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};