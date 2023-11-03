import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  form: FormGroup;
  iterations: number[] = [ 1, 2, 3, 4, 5,6,7,8,9,10];
  constructor(private formBuilder: FormBuilder) {
    
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['',[Validators.required,Validators.maxLength,Validators.minLength]],
      salary: ['',[Validators.required,Validators.maxLength,Validators.minLength]],
      department: ['',[Validators.required]],
      level: ['']
    });
  }

  
  

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form); 
    }else{
      console.log(this.form);
    }
  }
}
