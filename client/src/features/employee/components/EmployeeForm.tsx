import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { FormEvent } from "react";
import { useState } from "react";

import type { Employee } from "../types/employee.types";

interface EmployeeFormProps {
  onSubmit: (employee: Employee) => void | Promise<void>;
  onCancel: () => void;
}

type EmployeeFormData = Omit<Employee, "id">;

const initialFormData: EmployeeFormData = {
  employeeId: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  avatar: "",
  gender: "Male",
  dateOfBirth: "",
  joiningDate: "",
  department: "",
  designation: "",
  manager: "",
  employmentType: "Full Time",
  status: "Active",
  salary: 0,
  address: {
    addressLine1: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  },
};

const EmployeeForm = ({
  onSubmit,
  onCancel,
}: EmployeeFormProps) => {
  const [formData, setFormData] =
    useState<EmployeeFormData>(initialFormData);

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const updateField = (
    field: keyof EmployeeFormData,
    value: string | number,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const updateAddressField = (
    field: keyof Employee["address"],
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      address: {
        ...previous.address,
        [field]: value,
      },
    }));

    setErrors((previous) => ({
      ...previous,
      [`address.${field}`]: "",
    }));
  };

  const validate = () => {
    const validationErrors: Record<string, string> = {};

    if (!formData.employeeId.trim()) {
      validationErrors.employeeId =
        "Employee ID is required.";
    }

    if (!formData.firstName.trim()) {
      validationErrors.firstName =
        "First name is required.";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName =
        "Last name is required.";
    }

    if (!formData.email.trim()) {
      validationErrors.email =
        "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email,
      )
    ) {
      validationErrors.email =
        "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone =
        "Phone number is required.";
    }

    if (!formData.dateOfBirth) {
      validationErrors.dateOfBirth =
        "Date of birth is required.";
    }

    if (!formData.joiningDate) {
      validationErrors.joiningDate =
        "Joining date is required.";
    }

    if (!formData.department.trim()) {
      validationErrors.department =
        "Department is required.";
    }

    if (!formData.designation.trim()) {
      validationErrors.designation =
        "Designation is required.";
    }

    if (!formData.manager.trim()) {
      validationErrors.manager =
        "Manager is required.";
    }

    if (formData.salary <= 0) {
      validationErrors.salary =
        "Salary must be greater than zero.";
    }

    if (!formData.address.addressLine1.trim()) {
      validationErrors["address.addressLine1"] =
        "Address is required.";
    }

    if (!formData.address.city.trim()) {
      validationErrors["address.city"] =
        "City is required.";
    }

    if (!formData.address.state.trim()) {
      validationErrors["address.state"] =
        "State is required.";
    }

    if (!formData.address.country.trim()) {
      validationErrors["address.country"] =
        "Country is required.";
    }

    if (!formData.address.postalCode.trim()) {
      validationErrors["address.postalCode"] =
        "Postal code is required.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const employee: Employee = {
      id: crypto.randomUUID(),
      ...formData,
    };

    await onSubmit(employee);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
    >
      <Stack spacing={3}>
        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                Basic Information
              </Typography>

              <Divider />

              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  required
                  label="Employee ID"
                  value={formData.employeeId}
                  onChange={(event) =>
                    updateField(
                      "employeeId",
                      event.target.value,
                    )
                  }
                  error={Boolean(errors.employeeId)}
                  helperText={errors.employeeId}
                />

                <TextField
                  fullWidth
                  required
                  label="First Name"
                  value={formData.firstName}
                  onChange={(event) =>
                    updateField(
                      "firstName",
                      event.target.value,
                    )
                  }
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />

                <TextField
                  fullWidth
                  required
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(event) =>
                    updateField(
                      "lastName",
                      event.target.value,
                    )
                  }
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
              </Stack>

              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={(event) =>
                    updateField(
                      "email",
                      event.target.value,
                    )
                  }
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />

                <TextField
                  fullWidth
                  required
                  label="Phone"
                  value={formData.phone}
                  onChange={(event) =>
                    updateField(
                      "phone",
                      event.target.value,
                    )
                  }
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                Personal Information
              </Typography>

              <Divider />

              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={2}
              >
                <TextField
                  select
                  fullWidth
                  label="Gender"
                  value={formData.gender}
                  onChange={(event) =>
                    updateField(
                      "gender",
                      event.target.value,
                    )
                  }
                >
                  <MenuItem value="Male">
                    Male
                  </MenuItem>

                  <MenuItem value="Female">
                    Female
                  </MenuItem>

                  <MenuItem value="Other">
                    Other
                  </MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  required
                  type="date"
                  label="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={(event) =>
                    updateField(
                      "dateOfBirth",
                      event.target.value,
                    )
                  }
                  error={Boolean(
                    errors.dateOfBirth,
                  )}
                  helperText={errors.dateOfBirth}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                Employment Information
              </Typography>

              <Divider />

              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  required
                  label="Department"
                  value={formData.department}
                  onChange={(event) =>
                    updateField(
                      "department",
                      event.target.value,
                    )
                  }
                  error={Boolean(
                    errors.department,
                  )}
                  helperText={errors.department}
                />

                <TextField
                  fullWidth
                  required
                  label="Designation"
                  value={formData.designation}
                  onChange={(event) =>
                    updateField(
                      "designation",
                      event.target.value,
                    )
                  }
                  error={Boolean(
                    errors.designation,
                  )}
                  helperText={errors.designation}
                />
              </Stack>

              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  required
                  label="Manager"
                  value={formData.manager}
                  onChange={(event) =>
                    updateField(
                      "manager",
                      event.target.value,
                    )
                  }
                  error={Boolean(errors.manager)}
                  helperText={errors.manager}
                />

                <TextField
                  select
                  fullWidth
                  label="Employment Type"
                  value={formData.employmentType}
                  onChange={(event) =>
                    updateField(
                      "employmentType",
                      event.target.value,
                    )
                  }
                >
                  <MenuItem value="Full Time">
                    Full Time
                  </MenuItem>

                  <MenuItem value="Part Time">
                    Part Time
                  </MenuItem>

                  <MenuItem value="Contract">
                    Contract
                  </MenuItem>

                  <MenuItem value="Intern">
                    Intern
                  </MenuItem>
                </TextField>

                <TextField
                  select
                  fullWidth
                  label="Status"
                  value={formData.status}
                  onChange={(event) =>
                    updateField(
                      "status",
                      event.target.value,
                    )
                  }
                >
                  <MenuItem value="Active">
                    Active
                  </MenuItem>

                  <MenuItem value="Inactive">
                    Inactive
                  </MenuItem>

                  <MenuItem value="On Leave">
                    On Leave
                  </MenuItem>
                </TextField>
              </Stack>

              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  required
                  type="date"
                  label="Joining Date"
                  value={formData.joiningDate}
                  onChange={(event) =>
                    updateField(
                      "joiningDate",
                      event.target.value,
                    )
                  }
                  error={Boolean(
                    errors.joiningDate,
                  )}
                  helperText={errors.joiningDate}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />

                <TextField
                  fullWidth
                  required
                  type="number"
                  label="Annual Salary"
                  value={
                    formData.salary === 0
                      ? ""
                      : formData.salary
                  }
                  onChange={(event) =>
                    updateField(
                      "salary",
                      Number(event.target.value),
                    )
                  }
                  error={Boolean(errors.salary)}
                  helperText={errors.salary}
                  slotProps={{
                    htmlInput: {
                      min: 1,
                    },
                  }}
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                Address
              </Typography>

              <Divider />

              <TextField
                fullWidth
                required
                label="Address Line 1"
                value={
                  formData.address.addressLine1
                }
                onChange={(event) =>
                  updateAddressField(
                    "addressLine1",
                    event.target.value,
                  )
                }
                error={Boolean(
                  errors["address.addressLine1"],
                )}
                helperText={
                  errors["address.addressLine1"]
                }
              />

              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  required
                  label="City"
                  value={formData.address.city}
                  onChange={(event) =>
                    updateAddressField(
                      "city",
                      event.target.value,
                    )
                  }
                  error={Boolean(
                    errors["address.city"],
                  )}
                  helperText={
                    errors["address.city"]
                  }
                />

                <TextField
                  fullWidth
                  required
                  label="State"
                  value={formData.address.state}
                  onChange={(event) =>
                    updateAddressField(
                      "state",
                      event.target.value,
                    )
                  }
                  error={Boolean(
                    errors["address.state"],
                  )}
                  helperText={
                    errors["address.state"]
                  }
                />

                <TextField
                  fullWidth
                  required
                  label="Country"
                  value={formData.address.country}
                  onChange={(event) =>
                    updateAddressField(
                      "country",
                      event.target.value,
                    )
                  }
                  error={Boolean(
                    errors["address.country"],
                  )}
                  helperText={
                    errors["address.country"]
                  }
                />

                <TextField
                  fullWidth
                  required
                  label="Postal Code"
                  value={
                    formData.address.postalCode
                  }
                  onChange={(event) =>
                    updateAddressField(
                      "postalCode",
                      event.target.value,
                    )
                  }
                  error={Boolean(
                    errors["address.postalCode"],
                  )}
                  helperText={
                    errors["address.postalCode"]
                  }
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="button"
            variant="outlined"
            onClick={handleReset}
          >
            Reset
          </Button>

          <Button
            type="button"
            variant="outlined"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            variant="contained"
          >
            Save Employee
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default EmployeeForm;