import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/core/store';

@Injectable({
  providedIn: 'root',
})
export class FavoriteGuard implements CanActivate {
  constructor(private store: Store<fromRoot.State>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return this.store.pipe(
    //   select(fromRoot.selectIsAuthenticated),
    //   map((isAuthed) => {
    //     if (isAuthed) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }),
    //   take(1),
    // );

    const pass = prompt('Пароль');


    if (pass === '1234') {
      return true;
    }
    else {
      return false;
    }

    // return this.store.pipe(
    //   select(fromRoot.selectIsAuthenticated),
    //   map((isAuthed) => {
    //     if (isAuthed) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }),
    //   take(1),
    // );
  }

  // prompt(title, [default]);
}
