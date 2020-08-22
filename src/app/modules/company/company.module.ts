import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPipe } from 'src/app/pipe/mypipe.pipe';
import { MyService } from 'src/app/service/myservice.service';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ParentComponent } from './parent/parent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { CompanyRoutingModule } from './company-routing.module';
import { RouterModule } from '@angular/router';


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
    CompanyRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    RouterModule,
    CompanyRoutingModule
  ],
  exports: [
    BasicComponent,
    StudentComponent,
    StudentdetailsComponent,
    ParentComponent,
    EmployeeComponent,
    PagenotfoundComponent,
    StudentregistrationComponent,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
  ],
  providers: [MyService],
  bootstrap: []
})
export class CompanyModule {
  constructor(){
    console.log("This is company module");
  }
 }
