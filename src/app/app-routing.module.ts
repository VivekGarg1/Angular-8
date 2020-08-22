import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CustomPreloadingStrategyService } from './service/custom-preloading-strategy.service';
import { PagenotfoundComponent } from './modules/company/pagenotfound/pagenotfound.component';

const routes: Routes = [
  // { path: '', redirectTo:'student', pathMatch: 'full' },
  // { 
  //   path: 'company', loadChildren: () => import('src/app/modules/company/company.module').then(m => m.CompanyModule)
  // },
  // { 
  //   path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule),
  //   data: {preload:true, delay:false} 
  // },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //Pre loading example
    //preloadingStrategy:PreloadAllModules
    //Custom Pre loading example
    //preloadingStrategy:CustomPreloadingStrategyService
  })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategyService]
})
export class AppRoutingModule { }

