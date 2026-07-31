import { Box } from "@mui/material";

import AuthLayout from "../../layouts/AuthLayout";

import BrandSection from "../../features/auth/components/BrandSection";
import LoginCard from "../../features/auth/components/LoginCard";
import LoginForm from "../../features/auth/components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        <BrandSection />

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoginCard>
            <LoginForm />
          </LoginCard>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;