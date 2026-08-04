import { useCallback, useState } from "react";

import { employeeService } from "../services/employeeService";
import type { Employee } from "../types/employee.types";

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadEmployees = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await employeeService.getEmployees();

      setEmployees(data);
    } catch {
      setError("Failed to load employees.");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    employees,
    loading,
    error,
    loadEmployees,
  };
};