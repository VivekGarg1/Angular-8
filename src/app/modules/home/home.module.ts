import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatRadioModule} from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule} from '@angular/material/list';

import { BookService } from 'src/app/service/book.service';
import { GaurdService } from 'src/app/service/gaurd.service';
import { CustomerService } from 'src/app/service/customer.service';
import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { TestData} from './testdata';
import { ObservableandsubscribeComponent } from './observableandsubscribe/observableandsubscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

import { ActivateGuard } from 'src/app/gaurds/activate.guard';
import { RouterModule } from '@angular/router';
import { MerchantComponent } from './merchant/merchant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { SessionStorageComponent } from './session-storage/session-storage.component';
import { ChangecolorDirective } from 'src/app/directives/changecolor.directive';


@NgModule({
  declarations: [
    HomeComponent,
    ObservableandsubscribeComponent,
    AdminComponent,
    MerchantComponent,
    DashboardComponent,
    CustomerComponent,
    AddcustomerComponent,
    ViewDetailsComponent,
    LocalStorageComponent,
    SessionStorageComponent,
    ChangecolorDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData),
    FormsModule,
    ReactiveFormsModule,
    MatListModule
  ],
  exports: [
    HomeComponent,
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
  providers:[ BookService , ActivateGuard, GaurdService , CustomerService ,CookieService]
})
export class HomeModule {
  constructor(){
    console.log("This is home module");
  }
 }
