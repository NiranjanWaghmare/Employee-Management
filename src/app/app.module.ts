
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [AppComponent, EmployeeFormComponent,EmployeeListComponent], 
  imports: [BrowserModule, ReactiveFormsModule], 
  bootstrap: [AppComponent]
})
export class AppModule {}
