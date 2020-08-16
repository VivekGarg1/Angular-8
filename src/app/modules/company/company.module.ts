import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { MyPipe } from 'src/app/pipe/mypipe.pipe';
import { MyService } from 'src/app/service/myservice.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ParentComponent } from './parent/parent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';

@NgModule({
  declarations: [
    BasicComponent,
    EmployeeComponent,
    StudentComponent,
    StudentdetailsComponent,
    ParentComponent,
    MyPipe,
    PagenotfoundComponent,
    StudentregistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    BasicComponent,
    StudentComponent,
    StudentdetailsComponent,
    ParentComponent
  ],
  providers: [MyService],
  bootstrap: []
})
export class CompanyModule { }
