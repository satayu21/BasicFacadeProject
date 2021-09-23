import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee, EmployeeState } from '../models/employee.model';
import * as EmployeesActions from '../../store/employees.actions';
import { EmployeeApiService } from './employee-api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFacade {

  constructor(
    private store: Store<{ employeeState: EmployeeState }>,
    private employeeApiService: EmployeeApiService
  ) { }

  public loadEmployee() {
    this.employeeApiService.getEmployees().subscribe((response: any) => {
      this.store.dispatch(EmployeesActions.loadEmployees({employees: response.data}));
    });
  }

  public addEmployee(employee: Employee) {
    employee.id = Math.trunc(Math.random() * 100);
    this.store.dispatch(EmployeesActions.addEmployee({employee}));
  }

  public editEmployee(employee: Employee) {
    this.store.dispatch(EmployeesActions.editEmployee({employee}));
  }

  public deleteEmployee(employee: Employee) {
    this.store.dispatch(EmployeesActions.deleteEmployee({employee}));
  }
}
