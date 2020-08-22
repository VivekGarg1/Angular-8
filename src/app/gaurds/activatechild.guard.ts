import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GaurdService } from '../service/gaurd.service';

@Injectable({
  providedIn: 'root'
})
export class ActivatechildGuard implements CanActivateChild {
  constructor(private gaurdService: GaurdService, private router: Router) { }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.gaurdService.isChildRight())
      return true;
    else {
      alert("You don't have permission to view this page,redirecting to book section!!!");
      this.router.navigate(['book']);
      return false;
    }
  }

}
