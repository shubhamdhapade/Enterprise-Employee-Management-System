import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import type { ReactNode } from "react";

interface EmployeeInformationSectionProps {
  title: string;
  children: ReactNode;
}

const EmployeeInformationSection = ({
  title,
  children,
}: EmployeeInformationSectionProps) => {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>

        {children}
      </CardContent>
    </Card>
  );
};

export default EmployeeInformationSection;