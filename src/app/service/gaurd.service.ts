import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaurdService {

  constructor() { }

  isAdminRight(value): boolean {
    if (value == 'book')
      return true;
    else
      return false;
  }

  isChildRight():boolean{
    return false;
  }
}
