import { Component, OnInit,Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;
  iterations: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      salary: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(5)]],
      department: ['', Validators.required],
      level: ['']
    });
  }

  ngOnInit(): void {
    // You can perform initialization tasks here if needed
  }
  
  onSubmit() {
    const formData = this.form.value;
    this.employeeService.createEmployeeData(formData).subscribe(
      (response) => {
        console.log('Response:', response);
        this.form.reset();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
