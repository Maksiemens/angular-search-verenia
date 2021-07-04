import { Repository } from '@app/shared/models/repository.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as FavoriteRepositoryActions from '../actions/favorite-repository.actions';

export const favoriteRepositoryFeatureKey = 'favorite-repository';

export interface State extends EntityState<Repository> {
  selectedRepositoryId: number | null;
  isLoading: boolean;
}

export const adapter: EntityAdapter<Repository> = createEntityAdapter<Repository>({
  selectId: (repository: Repository) => repository.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedRepositoryId: null,
  isLoading: false,
});

export const reducer = createReducer(
  initialState,

  on(FavoriteRepositoryActions.loadFavoriteRepositories, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(FavoriteRepositoryActions.loadFavoriteRepositoriesSuccess, (state, { repositories }) => ({
    ...adapter.setAll(repositories, state),
    isLoading: false,
  })),
  on(FavoriteRepositoryActions.loadFavoriteRepositoriesFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(FavoriteRepositoryActions.addRepositoryToFavorite, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(FavoriteRepositoryActions.addRepositoryToFavoriteSuccess, (state, { repository }) => ({
    ...adapter.addOne(repository, state),
    isLoading: false,
  })),
  on(FavoriteRepositoryActions.addRepositoryToFavoriteFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(FavoriteRepositoryActions.removeRepositoryFromFavorite, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(FavoriteRepositoryActions.removeRepositoryFromFavoriteSuccess, (state, { repository }) => ({
    ...adapter.removeOne(repository.id, state),
    isLoading: false,
  })),
  on(FavoriteRepositoryActions.removeRepositoryFromFavoriteFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getSelectedRepositoryId = (state: State) => state.selectedRepositoryId;
export const selectIsLoading = (state: State) => state.isLoading;
