import { useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";

import EmployeeAddressCard from "../components/EmployeeAddressCard";
import EmployeeInformationSection from "../components/EmployeeInformationSection";
import EmployeeInfoRow from "../components/EmployeeInfoRow";
import EmployeeProfileCard from "../components/EmployeeProfileCard";
import { useEmployee } from "../hooks/useEmployee";

const EmployeeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    employee,
    loading,
    error,
    loadEmployee,
  } = useEmployee();

  useEffect(() => {
    if (id) {
      loadEmployee(id);
    }
  }, [id, loadEmployee]);

  return (
    <DashboardLayout>
      <Stack spacing={3}>
        <Button
          component={RouterLink}
          to="/employees"
          startIcon={<ArrowBackIcon />}
          sx={{
            alignSelf: "flex-start",
          }}
        >
          Back to Employees
        </Button>

        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 8,
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {!loading && error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}

        {!loading && !error && !employee && (
          <Alert severity="warning">
            Employee not found.
          </Alert>
        )}

        {!loading && employee && (
          <>
            <EmployeeProfileCard employee={employee} />

            <Grid
              container
              spacing={3}
            >
              <Grid
                size={{
                  xs: 12,
                  md: 6,
                }}
              >
                <EmployeeInformationSection
                  title="Personal Information"
                >
                  <EmployeeInfoRow
                    label="Gender"
                    value={employee.gender}
                  />

                  <EmployeeInfoRow
                    label="Date of Birth"
                    value={employee.dateOfBirth}
                  />

                  <EmployeeInfoRow
                    label="Email"
                    value={employee.email}
                  />

                  <EmployeeInfoRow
                    label="Phone"
                    value={employee.phone}
                  />
                </EmployeeInformationSection>
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 6,
                }}
              >
                <EmployeeInformationSection
                  title="Employment Information"
                >
                  <EmployeeInfoRow
                    label="Department"
                    value={employee.department}
                  />

                  <EmployeeInfoRow
                    label="Designation"
                    value={employee.designation}
                  />

                  <EmployeeInfoRow
                    label="Manager"
                    value={employee.manager}
                  />

                  <EmployeeInfoRow
                    label="Joining Date"
                    value={employee.joiningDate}
                  />

                  <EmployeeInfoRow
                    label="Employment Type"
                    value={employee.employmentType}
                  />

                  <EmployeeInfoRow
                    label="Salary"
                    value={`₹${employee.salary.toLocaleString("en-IN")}`}
                  />
                </EmployeeInformationSection>
              </Grid>

              <Grid size={12}>
                <EmployeeAddressCard employee={employee} />
              </Grid>
            </Grid>
          </>
        )}
      </Stack>
    </DashboardLayout>
  );
};

export default EmployeeDetailsPage;