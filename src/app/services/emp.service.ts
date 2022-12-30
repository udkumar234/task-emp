import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmpService {
  base_url = 'https://ml.thelightbulb.ai/api/employees';
  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    return this.httpClient.get(this.base_url);
  }

  createEmployee(employee:any) {
    return this.httpClient.post(this.base_url, employee);
  }

  updateEmployee(employee:any) {
    return this.httpClient.put(
      this.base_url + '/' + employee.empId.toString().padStart(4, '0'),
      employee
    );
  }

  deleteEmployee(emp:any) {
    return this.httpClient.delete(
      this.base_url + '/' + emp.empId.toString().padStart(4, '0')
    );
  }
}
