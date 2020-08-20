import { Injectable } from '@angular/core';
import { PreloadingStrategy,Route } from '@angular/router';
import { Observable, timer } from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CustomPreloadingStrategyService implements PreloadingStrategy {
 preload(route:Route ,load: () => Observable<any>): Observable<any> { 
    if(route.data && route.data['preload']){
      console.log("Pre load path is: ",route.path);
      //costom preloading with delay
      if(route.data['delay']){
        return timer(5000).pipe(mergeMap(() => load()));
      }
      return load();
    }
    else{
      return of(null);
    }
  }
}
