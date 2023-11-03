import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/employee';
  private employeeData: any | undefined
  constructor(private http: HttpClient) {}

  createEmployeeData(employeeData: any) {
    return this.http.post(this.apiUrl, employeeData).pipe(
      catchError(this.handleError)
    );
  }

  loadEmployeeData(){
    console.log("emp");
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );

  }
 
  updateEmployeeData(employeeData: any) {
    const getUrl = `${this.apiUrl}/${employeeData.id}`;
    console.log('we are here '+getUrl)
    return this.http.put(this.apiUrl, employeeData).pipe(
      catchError(this.handleError)
    );
  }

  searchEmployeeData(employeeId: number){
    const getUrl = `${this.apiUrl}/${employeeId}`;
    this.employeeData=this.http.get(getUrl).pipe(
      catchError(this.handleError)
    );
    // console.log('got the data'+this.employeeData)
      return this.employeeData
  }
  deleteEmployeeData(employeeId: number){
    const delUrl = `${this.apiUrl}/${employeeId}`;
    return this.http.delete(delUrl);

  }
  deleteAllEmployeeData(){
    
    return this.http.delete(this.apiUrl);

  }
  private handleError(error: HttpErrorResponse) {
    console.error('Error3:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
