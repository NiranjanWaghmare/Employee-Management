import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  { path: '', component: EmployeeFormComponent },
  { path: 'EmployeeForm', component: EmployeeFormComponent },
  { path: 'EmployeeList', component: EmployeeListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
