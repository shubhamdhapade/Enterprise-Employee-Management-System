/**
 * -----------------------------------------------------------------------------
 * Feature : Routing
 * Ticket  : EEMS-32
 * File    : UnauthorizedPage.tsx
 * Description:
 * Displayed when an authenticated user tries to access a page
 * without sufficient permissions.
 * -----------------------------------------------------------------------------
 */

import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Stack
        spacing={3}
        sx={{
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          color="error"
          sx={{
            fontWeight: 700,
          }}
        >
          403
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
          }}
        >
          Access Denied
        </Typography>

        <Typography color="text.secondary">
          You don't have permission to access this page.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </Stack>
    </Container>
  );
};

export default UnauthorizedPage;