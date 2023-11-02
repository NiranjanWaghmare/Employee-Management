import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployelistComponent } from './employelist.component';

describe('EmployelistComponent', () => {
  let component: EmployelistComponent;
  let fixture: ComponentFixture<EmployelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployelistComponent]
    });
    fixture = TestBed.createComponent(EmployelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
