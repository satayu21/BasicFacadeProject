import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { EmployeeApiService } from '../shared/services/employee-api.service';
import * as EmployeesActions from './employees.actions';

@Injectable({
  providedIn: 'root'
})
export class EmployeeEffects {
  allEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.loadEmployees),
      exhaustMap(() =>
        this.employeeApiService.getEmployees().pipe(
          map((response: any) => EmployeesActions.loadEmployeesSuccess({employees: response.data})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private employeeApiService: EmployeeApiService
  ) {}
}