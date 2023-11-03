import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'; // Import FormControl
import { EmployeeService } from '../service/employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  form: FormGroup;
  updateForm = false
  employeeData: any;
  iterations: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private employeeform: EmployeeFormComponent
  ) {
    this.form = this.formBuilder.group({
      
      name: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      salary: new FormControl(''),
      department: new FormControl(''),
      level: new FormControl(''),
      id : new FormControl('')
    });
  
    // You can set up additional logic or event listeners here if needed
  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.employeeService?.loadEmployeeData()?.subscribe((data: any) => {
      this.employeeData = data;
      
    });
  }
  updateButton(id: number){
    this.employeeService.searchEmployeeData(id).subscribe((data: any) => {
       this.updateForm = true     
       this.form.setValue({
        name: data['name'],
        email: data['email'],
        phoneNumber: data['phoneNumber'],
        salary: data['salary'],
        department: data['department'],
        level: data['level'],
        id: data['id']
       })
    });
  }
  updateEmployee(){
    console.log('are we ghe'+this.form);
    
    const formData = this.form.value;
    this.employeeService.updateEmployeeData(formData).subscribe(
      (response) => {
        console.log('Response:', response);
        this.form.reset();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployeeData(id).subscribe((data:any)=>{
      this.loadData()
    })
  }

  deleteAllEmployee(){
    this.employeeService.deleteAllEmployeeData().subscribe((data:any)=>{
      this.loadData()
    })
  }
}
