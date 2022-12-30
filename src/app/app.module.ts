import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmpService } from './services/emp.service';
import { AgePipe } from './pipes/age.pipe';
import { EmpFormComponent } from './components/emp-form/emp-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AgePipe,
    EmpFormComponent,
  ],
  bootstrap: [AppComponent],
  providers: [EmpService],
})
export class AppModule {}
