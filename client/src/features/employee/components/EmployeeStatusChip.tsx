import Chip from "@mui/material/Chip";

import { EMPLOYEE_STATUS_COLOR } from "../constants/employeeStatus";
import type { EmployeeStatus } from "../types/employee.types";

interface EmployeeStatusChipProps {
    status: EmployeeStatus;
}

const EmployeeStatusChip = ({ status }: EmployeeStatusChipProps) => {
    return (
        <Chip
            label={status}
            size="small"
            sx={{
                backgroundColor: EMPLOYEE_STATUS_COLOR[status],
                color: "#fff",
                fontWeight: 600,
                minWidth: 90
            }}
        />
    );
}

export default EmployeeStatusChip;