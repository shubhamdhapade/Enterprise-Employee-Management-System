import Avatar from '@mui/material/Avatar';

import type { Employee } from '../types/employee.types';
import { getEmployeeInitials } from '../utils/employeeHelpers';

interface EmployeeAvatarProps {
    employee: Employee;
    size?: number;
}

const EmployeeAvatar = ({ employee, size = 40 }: EmployeeAvatarProps) => {
    return(
        <Avatar
            src = {employee.avatar || undefined}
            alt = {`${employee.firstName} ${employee.lastName}`}
            sx={{ 
                width: size, 
                height: size,
                fontSize: size * 0.4,
                bgcolor: "primary.main",
            }}
        >
            {!employee.avatar && getEmployeeInitials(employee)}
        </Avatar>
    );
}

export default EmployeeAvatar;
