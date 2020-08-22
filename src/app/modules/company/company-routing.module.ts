import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ParentComponent } from './parent/parent.component';

const companyRoutes: Routes = [
  // { path: '', redirectTo:'student', pathMatch: 'full' },
  { path: '', component:ParentComponent,
  children: [
    {path: 'student', component: StudentComponent,
    children: [
      { path: 'studentdetails', component: StudentdetailsComponent },
      { path: 'studentregistration', component: StudentregistrationComponent }
    ]}
  ]},
  // { path: 'student', 
  //   children: [
  //     { path: '', component:StudentComponent},
  //     { path: 'studentdetails', component: StudentdetailsComponent },
  //     { path: 'studentregistration', component: StudentregistrationComponent }
  //   ]},
  ];
    
    @NgModule({
      imports: [RouterModule.forChild(companyRoutes)],
      exports: [RouterModule]
    })
export class CompanyRoutingModule {}
    
