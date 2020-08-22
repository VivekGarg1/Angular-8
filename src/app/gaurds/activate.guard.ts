import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GaurdService } from '../service/gaurd.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private gaurdService: GaurdService, private router:Router,) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.gaurdService.isAdminRight(route.data['path']))
      return true;
    else {
      alert("You don't have permission to view this page,redirecting to home");
       this.router.navigate(['home']);
    }
  }

}
