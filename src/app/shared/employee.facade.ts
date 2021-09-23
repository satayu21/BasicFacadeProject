import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee, EmployeeState } from './models/employee.model';
import * as EmployeesActions from './../store/employees.actions';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFacade {

  constructor(
    private store: Store<{ employeeState: EmployeeState }>
  ) { }

  /**
   * Used to fetch all the employees
   */
  public loadEmployee() {
    this.store.dispatch(EmployeesActions.loadEmployees());
  }

  /**
   * Used to add an employee in the employees list and 
   * save it in the store
   */
  public addEmployee(employee: Employee) {
    employee.id = Math.trunc(Math.random() * 100);
    this.store.dispatch(EmployeesActions.addEmployee({employee}));
  }

  /**
   * Used to edit an employee of the employees list 
   * present in the store
   */
  public editEmployee(employee: Employee) {
    this.store.dispatch(EmployeesActions.editEmployee({employee}));
  }

  /**
   * Used to delete an employee from the employees list 
   * present in the store
   */
  public deleteEmployee(employee: Employee) {
    this.store.dispatch(EmployeesActions.deleteEmployee({employee}));
  }
}
