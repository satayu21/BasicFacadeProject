import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeesActions from './employees.actions';
import { EmployeeState } from '../shared/models/employee.model';

export const initialState: EmployeeState = {
    employees: []
};

const _employeeReducer = createReducer(
    initialState,
    on(EmployeesActions.loadEmployees, (state, {employees}) => ({employees: [...state.employees, ...employees]})),
    on(EmployeesActions.addEmployee, (state, {employee}) => ({employees: [...state.employees, employee]})),
    on(EmployeesActions.editEmployee, (state, {employee}) => {
        const employees = [...state.employees];
        const index = employees.findIndex( emp => emp.id === employee.id);
        employees.splice(index, 1, employee);
        return {employees};
    }),
    on(EmployeesActions.deleteEmployee, (state, {employee}) => ({employees: state.employees.filter( emp => emp.id !== employee.id)}))
);

export function employeeReducer(state: EmployeeState | undefined, action: Action) {
    return _employeeReducer(state, action);
}