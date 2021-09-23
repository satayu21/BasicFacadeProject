import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Employee, EmployeeState } from '../shared/models/employee.model';
import { EmployeeFacade } from '../shared/employee.facade';
import { EmployeeDialogComponent } from '../shared/components/employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'avatar', 'email', 'first_name', 'last_name', 'actions'];
  public employees: Employee[] = [];

  constructor(
    private employeeFacade: EmployeeFacade, 
    private store: Store<{ employeeState: EmployeeState }>,
    private dialog: MatDialog,
  ) {
    this.store.select('employeeState').subscribe((data) => {
      this.employees = data.employees;
      // console.log(this.employees);
    });
  }

  ngOnInit(): void {
    this.employeeFacade.loadEmployee();
  }

  public addEmployee() {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeFacade.addEmployee(result);
      }
    });
  }

  public editEmployee(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '250px',
      data: {...employee}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeFacade.editEmployee(result);
      }
    });
  }

  public deleteEmployee(employee: Employee) {
    this.employeeFacade.deleteEmployee(employee);
  }

}
