import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as fromRoot from '@app/core/store';
import * as AuthActions from '../actions/auth.actions';
import * as AuthSelectors from '../selectors/auth.selectors';
import { SwUpdatesService } from '@app/core/services/sw-updates.service';

@Injectable()
export class AuthEffects {
  checkForUpdatesApp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.checkForUpdatesApp),
        tap(() => this.swUpdatesService.checkForUpdates()),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
    private swUpdatesService: SwUpdatesService,
  ) {}
}
