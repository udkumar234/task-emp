import { Component, OnInit, Output } from '@angular/core';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private empService: EmpService) {}
  employees:any[] = [];
  employee:any;
  columns = ['name', 'emp Id', 'Age', 'email Id', 'Team'];
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.empService.getEmployees().subscribe((res: any) => {
      console.log(res);
      this.employees = res.data;
    });
  }

  editEmployee(emp:any) {
    this.employee = emp;
  }

  deleteEmployee(emp:any) {
    this.empService.deleteEmployee(emp).subscribe((res) => {});
    setTimeout(() => {
      this.getEmployees();
    }, 2000);
  }

  getImage(i:number){
     let count = i + 1;
     switch(true){
      case count % 6 == 0:
        return 6;
      case count % 5 == 0:
        return 5;
      case count % 4 == 0:
        return 4;
      case count % 3 == 0:
        return 3;
      case count % 2 == 0:
        return 2;
      case count % 1 == 0:
         return 1;
      }
      return 1;
  }
}
