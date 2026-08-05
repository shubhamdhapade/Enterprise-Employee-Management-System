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

interface EmployeeFiltersProps {
  status: string;
  employmentType: string;
  onStatusChange: (value: string) => void;
  onEmploymentTypeChange: (value: string) => void;
}

const EmployeeFilters = ({
  status,
  employmentType,
  onStatusChange,
  onEmploymentTypeChange,
}: EmployeeFiltersProps) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
    >
      <FormControl size="small" sx={{ minWidth: 180 }}>
        <InputLabel>Status</InputLabel>

        <Select
          value={status}
          label="Status"
          onChange={(event) =>
            onStatusChange(event.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>

          {EMPLOYEE_STATUS.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 200 }}>
        <InputLabel>Employment Type</InputLabel>

        <Select
          value={employmentType}
          label="Employment Type"
          onChange={(event) =>
            onEmploymentTypeChange(event.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>

          {EMPLOYMENT_TYPES.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default EmployeeFilters;