import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.3s ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ]
})
@Injectable({
  providedIn: 'root',
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;

  iterations: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private toastr: ToastrService
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

  ngOnInit(): void {}

  onSubmit() {
    const formData = this.form.value;
    this.employeeService.createEmployeeData(formData).subscribe(
      (response) => {
        alert('Employee Record Saved Successfully');
        this.form.reset();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
