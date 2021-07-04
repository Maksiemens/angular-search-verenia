import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/core/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as RepositoryActions from '@app/core/store/actions/repository.actions';
import { RepositoryService } from '@app/core/services/repository.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RepositoryResponse } from '@app/shared/models/repository-response.model';

@Injectable()
export class RepositoryEffects {
  loadRepositories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepositoryActions.loadRepositories),
      switchMap(({ query }) => {
        return this.repositoryService.loadRepositories(query).pipe(
          map((response: RepositoryResponse) => {
            return RepositoryActions.loadRepositoriesSuccess({ repositories: response.items });
          }),
          catchError((error) => {
            this.snackBar.open(error.message, 'Ok');
            return of(RepositoryActions.loadRepositoriesFailure({ error }));
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
    private repositoryService: RepositoryService,
    private snackBar: MatSnackBar
  ) {}
}
