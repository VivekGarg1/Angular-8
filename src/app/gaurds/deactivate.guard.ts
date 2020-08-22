import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantComponent } from '../modules/home/merchant/merchant.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<MerchantComponent> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return window.confirm('Are you sure to navigate?');
  }
  
}
