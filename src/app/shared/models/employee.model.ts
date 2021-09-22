export interface Employee {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface EmployeeState {
    employees: Employee[]
}