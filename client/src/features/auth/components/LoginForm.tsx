/**
 * Feature: Authentication
 * Ticket: EEMS-29
 * Description: Login form with React Hook Form and Zod validation.
 */

import { zodResolver } from "@hookform/resolvers/zod";
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
import { useForm } from "react-hook-form";

import {
  loginSchema,
  type LoginFormValues,
} from "../schemas/loginSchema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login Form Data", data);

    // API integration will be implemented in EEMS-30
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
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
          label="Email Address"
          fullWidth
          type="email"
          placeholder="john.doe@company.com"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
        />

        <TextField
          label="Password"
          fullWidth
          type="password"
          placeholder="Enter your password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password")}
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
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={isSubmitting}
          sx={{
            py: 1.5,
            borderRadius: 2,
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          Sign In
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;