import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ObservableandsubscribeComponent } from './observableandsubscribe/observableandsubscribe.component';
import { AdminComponent } from './admin/admin.component';
import { MerchantComponent } from './merchant/merchant.component';


import { ActivateGuard } from 'src/app/gaurds/activate.guard';
import { DeactivateGuard } from 'src/app/gaurds/deactivate.guard';
import { ActivatechildGuard } from 'src/app/gaurds/activatechild.guard';


import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerComponent } from './customer/customer.component';
import { ViewDetailsComponent } from './view-details/view-details.component';


const homeRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ActivateGuard], data: { path: 'admin' } },
  { path: 'book', component: ObservableandsubscribeComponent, canActivate: [ActivateGuard], data: { path: 'book' } },
  { path: 'merchant', component: MerchantComponent, canDeactivate: [DeactivateGuard] },
  {
    path: 'customer', component: CustomerComponent, canActivateChild: [ActivatechildGuard],
    children: [
      {path: 'addcustomer', component: AddcustomerComponent}
    ]
  },
  {path: 'view-details/:id', component: ViewDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

