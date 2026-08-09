import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

import {
  EMPLOYEE_STATUS,
  EMPLOYMENT_TYPES,
} from "../constants/employeeStatus";
import type {
  EmployeeStatus,
  EmploymentType,
} from "../types/employee.types";

interface EmployeeFiltersProps {
  department: string;
  status: EmployeeStatus | "";
  employmentType: EmploymentType | "";
  departments: string[];
  onDepartmentChange: (value: string) => void;
  onStatusChange: (value: EmployeeStatus | "") => void;
  onEmploymentTypeChange: (value: EmploymentType | "") => void;
}

const EmployeeFilters = ({
  department,
  status,
  employmentType,
  departments,
  onDepartmentChange,
  onStatusChange,
  onEmploymentTypeChange,
}: EmployeeFiltersProps) => {
  return (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={2}
      sx={{ width: "100%" }}
    >
      <FormControl fullWidth size="small">
        <InputLabel id="employee-department-label">
          Department
        </InputLabel>

        <Select
          labelId="employee-department-label"
          value={department}
          label="Department"
          onChange={(event) =>
            onDepartmentChange(event.target.value)
          }
        >
          <MenuItem value="">
            All Departments
          </MenuItem>

          {departments.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small">
        <InputLabel id="employee-status-label">
          Status
        </InputLabel>

        <Select
          labelId="employee-status-label"
          value={status}
          label="Status"
          onChange={(event) =>
            onStatusChange(
              event.target.value as EmployeeStatus | ""
            )
          }
        >
          <MenuItem value="">
            All Statuses
          </MenuItem>

          {EMPLOYEE_STATUS.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small">
        <InputLabel id="employee-employment-type-label">
          Employment Type
        </InputLabel>

        <Select
          labelId="employee-employment-type-label"
          value={employmentType}
          label="Employment Type"
          onChange={(event) =>
            onEmploymentTypeChange(
              event.target.value as EmploymentType | ""
            )
          }
        >
          <MenuItem value="">
            All Types
          </MenuItem>

          {EMPLOYMENT_TYPES.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default EmployeeFilters;