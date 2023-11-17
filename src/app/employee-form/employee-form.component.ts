import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';



@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})

export class EmployeeFormComponent  {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      salary: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(5)],
      ],
      department: ['', Validators.required],
      level: ['5'],
    });
  }



  onSubmit() {
    const formData = this.form.value;
    this.employeeService.createEmployeeData(formData).subscribe(
      () => {
        alert('Employee Record Saved Successfully');
        this.form.reset();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
