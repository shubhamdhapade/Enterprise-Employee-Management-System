import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const LoginForm = () => {
  return (
    <Box component="form" noValidate>
      <Stack spacing={3}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
          >
            Sign in to continue to Enterprise Employee Management System.
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Email Address"
          type="email"
          placeholder="john.doe@company.com"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />

          <Link
            href="#"
            underline="hover"
          >
            Forgot Password?
          </Link>
        </Box>

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          Sign In
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;