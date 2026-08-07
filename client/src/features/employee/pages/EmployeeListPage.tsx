import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Add,
} from "@mui/icons-material";

import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import EmployeeFilters from "../components/EmployeeFilters";
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeTable from "../components/EmployeeTable";
import { useEmployees } from "../hooks/useEmployees";
import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";

const EmployeeListPage = () => {
  const navigate = useNavigate();

  const {
    employees,
    loading,
    error,
    loadEmployees,
  } = useEmployees();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const fullName =
        `${employee.firstName} ${employee.lastName}`.toLowerCase();

      const matchesSearch =
        search === "" ||
        fullName.includes(search.toLowerCase()) ||
        employee.employeeId
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "" || employee.status === status;

      const matchesEmploymentType =
        employmentType === "" ||
        employee.employmentType === employmentType;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesEmploymentType
      );
    });
  }, [employees, search, status, employmentType]);

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
            onClick={() => navigate("/employees/new")}
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

        <Paper sx={{ p: 3 }}>
          <Stack spacing={2}>
            <EmployeeSearch
              value={search}
              onChange={setSearch}
            />

            <EmployeeFilters
              status={status}
              employmentType={employmentType}
              onStatusChange={setStatus}
              onEmploymentTypeChange={setEmploymentType}
            />
          </Stack>
        </Paper>

        <EmployeeTable
          employees={filteredEmployees}
          loading={loading}
          error={error}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default EmployeeListPage;