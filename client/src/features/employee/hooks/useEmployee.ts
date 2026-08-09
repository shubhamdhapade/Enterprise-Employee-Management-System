import { useCallback, useState } from "react";

import { employeeService } from "../services/employeeService";
import type { Employee } from "../types/employee.types";

export const useEmployee = () => {
  const [employee, setEmployee] = useState<Employee | null>(
    null,
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadEmployee = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await employeeService.getEmployeeById(id);

      if (!data) {
        setEmployee(null);
        setError("Employee not found.");
        return;
      }

      setEmployee(data);
    } catch {
      setEmployee(null);
      setError("Failed to load employee.");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    employee,
    loading,
    error,
    loadEmployee,
  };
};