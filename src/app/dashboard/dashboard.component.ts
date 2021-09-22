import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee, EmployeeState } from '../shared/models/employee.model';
import { EmployeeFacade } from '../shared/services/employee.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private employeeFacade: EmployeeFacade, private store: Store<{ employeeState: EmployeeState }>) {
    this.store.select('employeeState').subscribe((data) => {
      this.employees = data.employees;
      // console.log(this.employees);
    });
  }

  ngOnInit(): void {
    this.employeeFacade.loadEmployee();
  }

  public addEmployee() {
    const employee: Employee = {
      id: 2,
      email: 'satayugayen22@gmail.com',
      first_name: 'Sata',
      last_name: 'Gaen',
      avatar: 'url1'
    };
    this.employeeFacade.addEmployee(employee);
  }

  public editEmployee() {
    const employee: Employee = {
      id: 2,
      email: 'satayugayen20@gmail.com',
      first_name: 'Satay',
      last_name: 'Gayen',
      avatar: 'url3'
    };
    this.employeeFacade.editEmployee(employee);
  }

  public deleteEmployee() {
    const employee: Employee = {
      id: 2,
      email: 'satayugayen20@gmail.com',
      first_name: 'Satay',
      last_name: 'Gayen',
      avatar: 'url3'
    };
    this.employeeFacade.deleteEmployee(employee);
  }

}
