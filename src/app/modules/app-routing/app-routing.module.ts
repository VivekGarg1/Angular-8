import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../company/student/student.component';
import { StudentdetailsComponent } from '../company/studentdetails/studentdetails.component';
import { PagenotfoundComponent } from '../company/pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from '../company/studentregistration/studentregistration.component';

const routes: Routes = [
  // { path: '', redirectTo:'student', pathMatch: 'full' },
  { path: 'student', 
    children: [
      {path: '', component:StudentComponent},
      { path: 'studentdetails', component: StudentdetailsComponent },
      { path: 'studentregistration', component: StudentregistrationComponent }
    ]},
  { path: '**', component: PagenotfoundComponent }
  ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule {}
    
