import { Repository } from '@app/shared/models/repository.model';
import { createAction, props } from '@ngrx/store';

export const loadFavoriteRepositories = createAction(
  '[FavoriteRepository] Load Favorite Repositories'
);
export const loadFavoriteRepositoriesSuccess = createAction(
  '[FavoriteRepository] Load Favorite Repositories Success',
  props<{ repositories: Repository[] }>()
);
export const loadFavoriteRepositoriesFailure = createAction(
  '[FavoriteRepository] Load Favorite Repositories Failure',
  props<{ error: any }>()
);

export const addRepositoryToFavorite = createAction(
  '[FavoriteRepository] Add Repository To Favorite',
  props<{ repository: Repository }>()
);
export const addRepositoryToFavoriteSuccess = createAction(
  '[FavoriteRepository] Add Repository To Favorite Success',
  props<{ repository: Repository }>()
);
export const addRepositoryToFavoriteFailure = createAction(
  '[FavoriteRepository] Add Repository To Favorite Failure',
  props<{ error: any }>()
);

export const removeRepositoryFromFavorite = createAction(
  '[FavoriteRepository] Remove Repository From Favorite',
  props<{ repository: Repository }>()
);
export const removeRepositoryFromFavoriteSuccess = createAction(
  '[FavoriteRepository] Remove Repository From Favorite Success',
  props<{ repository: Repository }>()
);
export const removeRepositoryFromFavoriteFailure = createAction(
  '[FavoriteRepository] Remove Repository From Favorite Failure',
  props<{ error: any }>()
);

