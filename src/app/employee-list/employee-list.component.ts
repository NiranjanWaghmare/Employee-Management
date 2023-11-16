import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
  searchForm: FormGroup;
  updateForm = false
  employeeData: any;
  iterations: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  searchName: string = '';

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private employeeform: EmployeeFormComponent,
    private el: ElementRef, private renderer: Renderer2
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
    this.searchForm = this.formBuilder.group({
      searchName : new FormControl('')
    })
  
  }
  ngOnInit(): void {
    this.loadData();
  }
  clearSearch(){
    this.searchForm.patchValue({
      searchName: ''
    })
    this.loadData()
  }
  searchEmployee(){
    this.loadData()
    this.updateForm = false;
  }
  loadData() {
    
    this.searchName = this.searchForm.get('searchName')?.value
    this.employeeService?.loadEmployeeData(this.searchName)?.subscribe((data: any) => {
      this.employeeData = data;
    });
  }
  updateButton(elementId: String,id: number){
    const element = this.el.nativeElement.querySelector(`#${elementId}`);
   

    this.employeeService.searchEmployeeDataById(id).subscribe((data: any) => {
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

    const yOffset = element?.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
    console.log(this.form);
    
  
  }
  updateEmployee(){
    
    const formData = this.form.value;
    this.employeeService.updateEmployeeData(formData)?.subscribe(
      (response) => {
        this.updateForm = false
        this.form.reset();
        this.loadData();
        alert('Employee Record Updated Successfully');
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployeeData(id).subscribe((data:any)=>{
      alert('Employee Record Deleted Successfully');
      this.loadData()
    })
  }

  deleteAllEmployee(){
    if(this.employeeData.length>0){
    this.employeeService.deleteAllEmployeeData().subscribe((data:any)=>{
      alert('All Employee Records Deleted Successfully');
      this.loadData()
    })}
    else{
      alert('No Employee Records to Deleted');
    }
  }


  cancelButton(){
    this.updateForm = false;
  }
}
