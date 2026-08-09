import { Add } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";

import EmployeeFilters from "../components/EmployeeFilters";
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeTable from "../components/EmployeeTable";
import { useEmployees } from "../hooks/useEmployees";
import type {
  EmployeeStatus,
  EmploymentType,
} from "../types/employee.types";

const EmployeeListPage = () => {
  const navigate = useNavigate();

  const {
    employees,
    loading,
    error,
  } = useEmployees();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] =
    useState<EmployeeStatus | "">("");
  const [employmentType, setEmploymentType] =
    useState<EmploymentType | "">("");

  const departments = useMemo(() => {
    return Array.from(
      new Set(
        employees
          .map((employee) => employee.department)
          .filter(Boolean),
      ),
    ).sort();
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    const normalizedSearch =
      search.trim().toLowerCase();

    return employees.filter((employee) => {
      const fullName =
        `${employee.firstName} ${employee.lastName}`
          .toLowerCase();

      const matchesSearch =
        normalizedSearch === "" ||
        fullName.includes(normalizedSearch) ||
        employee.employeeId
          .toLowerCase()
          .includes(normalizedSearch) ||
        employee.email
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesDepartment =
        department === "" ||
        employee.department === department;

      const matchesStatus =
        status === "" ||
        employee.status === status;

      const matchesEmploymentType =
        employmentType === "" ||
        employee.employmentType === employmentType;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus &&
        matchesEmploymentType
      );
    });
  }, [
    employees,
    search,
    department,
    status,
    employmentType,
  ]);

  const handleView = (employee: (typeof employees)[number]) => {
    navigate(`/employees/${employee.id}`);
  };

  const handleEdit = (employee: (typeof employees)[number]) => {
    navigate(`/employees/${employee.id}/edit`);
  };

  const handleDelete = (employee: (typeof employees)[number]) => {
    console.log("Delete employee:", employee.id);
  };

  return (
    <DashboardLayout>
      <Stack spacing={3}>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: {
              xs: "stretch",
              sm: "center",
            },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              Employees
            </Typography>

            <Typography color="text.secondary">
              View and manage employee records.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() =>
              navigate("/employees/new")
            }
            sx={{
              alignSelf: {
                xs: "stretch",
                sm: "auto",
              },
            }}
          >
            Add Employee
          </Button>
        </Stack>

        <Paper
          sx={{
            p: 3,
          }}
        >
          <Stack spacing={2}>
            <EmployeeSearch
              value={search}
              onChange={setSearch}
            />

            <EmployeeFilters
              department={department}
              status={status}
              employmentType={employmentType}
              departments={departments}
              onDepartmentChange={
                setDepartment
              }
              onStatusChange={setStatus}
              onEmploymentTypeChange={
                setEmploymentType
              }
            />
          </Stack>
        </Paper>

        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 5,
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {error && !loading && (
          <Alert severity="error">
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <EmployeeTable
            employees={filteredEmployees}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Stack>
    </DashboardLayout>
  );
};

export default EmployeeListPage;