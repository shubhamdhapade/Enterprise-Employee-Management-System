import type {ReactNode} from "react";
import { Card, CardContent } from "@mui/material";

interface LoginCardProps {
  children?: ReactNode;
}

const LoginCard = ({ children }: LoginCardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 480,
        borderRadius: 4,
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        background: "rgba(255,255,255,0.95)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
      }}
    >
      <CardContent
        sx={{
          p: 5
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default LoginCard;