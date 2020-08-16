import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { CompanyModule } from './modules/company/company.module';
import { RouterModule } from '@angular/router';
import { MyService } from './service/myservice.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CompanyModule,
    FormsModule,
    RouterModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("This is module");
  }
}
