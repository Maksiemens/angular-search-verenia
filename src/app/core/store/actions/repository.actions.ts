import { createAction, props } from '@ngrx/store';
import { Repository } from '@app/shared/models/repository.model';

export const loadRepositories = createAction(
  '[Repository/API] Load Repositories',
);
export const loadRepositoriesSuccess = createAction(
  '[Repository/API] Load Repositories Success',
  props<{ repositories: Repository[] }>()
);
export const loadRepositoriesFailure = createAction(
  '[Repository/API] Load Repositories Failure',
  props<{ error: any }>()
);

// export const createFavoriteRepository = createAction(
//   '[Repository/API] Create Favorite Repository',
//   props<{ response: any }>()
// );
// export const createFavoriteRepositorySuccess = createAction(
//   '[Repository/API] Create Favorite Repository Success',
//   props<{ response: any }>()
// );
// export const createFavoriteRepositoryFailure = createAction(
//   '[Repository/API] Create Favorite Repository Failure',
//   props<{ error: any }>()
// );

export const setRepositoryFilter = createAction(
  '[Repository] Set Repository Filter',
    props<{ search: { query?: string, filter?: string } }>()
);
