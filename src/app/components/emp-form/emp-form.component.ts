import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css'],
})
export class EmpFormComponent implements OnInit {
  @Input() formValue:any;
  @Output() emitter = new EventEmitter();
  formGroup = this.fb.group({
    dept: '',
    dob: '',
    emailId: '',
    empId: 0,
    fname: '',
    lname: '',
  });
  constructor(private fb: FormBuilder, private empService: EmpService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.formValue) this.formGroup.patchValue(this.formValue);
  }

  saveData() {
    let formValue = this.formGroup.getRawValue();
    if (this.formValue) {
      formValue.empId = this.formValue.empId;
      this.empService.updateEmployee(formValue).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.empService.createEmployee(formValue).subscribe((res) => {
        console.log(res);
      });
    }
    setTimeout(() => {
      this.emitter.emit();
    }, 2000);
  }
}
