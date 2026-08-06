import {
  Divider,
  Stack,
  Typography,
} from "@mui/material";

interface EmployeeInfoRowProps {
  label: string;
  value: string | number;
}

const EmployeeInfoRow = ({
  label,
  value,
}: EmployeeInfoRowProps) => {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          py: 1.5,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontWeight: 500,
          }}
        >
          {label}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            textAlign: "right",
          }}
        >
          {value}
        </Typography>
      </Stack>

      <Divider />
    </>
  );
};

export default EmployeeInfoRow;