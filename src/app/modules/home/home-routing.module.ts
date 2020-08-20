import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [
  // { path: '', redirectTo:'student', pathMatch: 'full' },
  { path: '', component:HomeComponent},
  ];
    
    @NgModule({
      imports: [RouterModule.forChild(homeRoutes)],
      exports: [RouterModule]
    })
export class HomeRoutingModule {}
    
