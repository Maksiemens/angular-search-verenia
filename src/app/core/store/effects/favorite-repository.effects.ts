import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/core/store';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FavoriteRepositoryActions from '@app/core/store/actions/favorite-repository.actions';
import * as UserSelectors from '@app/core/store/selectors/repository.selectors';
import { Repository } from '@app/shared/models/repository.model';
import { FavoriteRepositoryService } from '@app/core/services/favorite-repository.service';

@Injectable()
export class FavoriteRepositoryEffects {
  loadFavoriteRepositories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoriteRepositoryActions.loadFavoriteRepositories),
      switchMap(() =>
        this.favoriteRepositoryService.loadFavoriteRepositories().pipe(
          map((repositories: Repository[]) => FavoriteRepositoryActions.loadFavoriteRepositoriesSuccess({ repositories })),
          catchError((error) => of(FavoriteRepositoryActions.loadFavoriteRepositoriesFailure({ error }))),
        ),
      ),
    ),
  );

  addRepositoryToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoriteRepositoryActions.addRepositoryToFavorite),
      mergeMap(({ repository }) =>
        this.favoriteRepositoryService.addRepositoryToFavorite([repository]).pipe(
          map(() => FavoriteRepositoryActions.addRepositoryToFavoriteSuccess({ repository })),
          catchError((error) => of(FavoriteRepositoryActions.addRepositoryToFavoriteFailure({ error }))),
        ),
      ),
    ),
  );

  removeRepositoryFromFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoriteRepositoryActions.removeRepositoryFromFavorite),
      mergeMap(({ repository }) =>
        this.favoriteRepositoryService.removeRepositoryFromFavorite([repository.id]).pipe(
          map(() => FavoriteRepositoryActions.removeRepositoryFromFavoriteSuccess({ repository })),
          catchError((error) => of(FavoriteRepositoryActions.removeRepositoryFromFavoriteFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
    private favoriteRepositoryService: FavoriteRepositoryService,
  ) {}
}
