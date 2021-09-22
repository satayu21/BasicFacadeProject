import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee, EmployeeState } from '../models/employee.model';
import * as EmployeesActions from '../../store/employees.actions';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFacade {

  constructor(private store: Store<{ employeeState: EmployeeState }>) { }

  public loadEmployee() {
    const employee: Employee = {
      id: 1,
      email: 'satayugayen21@gmail.com',
      first_name: 'Satayu',
      last_name: 'Gayen',
      avatar: 'url'
    };
    this.store.dispatch(EmployeesActions.loadEmployees({employees: [employee]}));
  }

  public addEmployee(employee: Employee) {
    this.store.dispatch(EmployeesActions.addEmployee({employee}));
  }

  public editEmployee(employee: Employee) {
    this.store.dispatch(EmployeesActions.editEmployee({employee}));
  }

  public deleteEmployee(employee: Employee) {
    this.store.dispatch(EmployeesActions.deleteEmployee({employee}));
  }
}
