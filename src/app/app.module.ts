import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, EmployeeFormComponent,EmployeeListComponent], 
  imports: [BrowserModule, BrowserAnimationsModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule, ToastrModule.forRoot({
    positionClass: 'toast-top-right'
  })], 
  bootstrap: [AppComponent]
})
export class AppModule {}
