import { employeeMock } from '../mocks/employeeMock';
import type { Employee } from '../types/employee.types';

const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

class EmployeeService  {
    async getEmployees(): Promise<Employee[]>{
        await delay(300);
        return employeeMock.map(employee => ({ ...employee }));
    }

    async getEmployeeById(id: string): Promise<Employee | undefined> {
        await delay(300);
        return employeeMock.find((employee) => employee.id === id);
    }

    async createEmployee(employee: Employee): Promise<Employee> {
        await delay(300);
        employeeMock.push(employee);
        return employee;
    }

    async updateEmployee(id: string, updatedEmployee: Employee): Promise<Employee | undefined> {
        await delay(300);
        const index = employeeMock.findIndex((employee) => employee.id === id);
        if(index === -1){
            return undefined;
        }
        employeeMock[index] = updatedEmployee;
        return updatedEmployee;
    }

    async deleteEmployee(id: string): Promise<boolean> {
        await delay(300);
        const index = employeeMock.findIndex((employee) => employee.id === id);
        if(index === -1){
            return false;
        }
        employeeMock.splice(index, 1);
        return true;
    }
}

export const employeeService = new EmployeeService();