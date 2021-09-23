import { createAction, props } from '@ngrx/store';
import { Employee } from '../shared/models/employee.model';

export const loadEmployees = createAction('[Employee API] Load Employees');
export const loadEmployeesSuccess = createAction('[Employee API] Load Employees Success', props<{employees: Employee[]}>());
export const addEmployee = createAction('[Employee API] Add Employee', props<{employee: Employee}>());
export const editEmployee = createAction('[Employee API] Edit Employee', props<{employee: Employee}>());
export const deleteEmployee = createAction('[Employee API] Delete Employee', props<{employee: Employee}>());