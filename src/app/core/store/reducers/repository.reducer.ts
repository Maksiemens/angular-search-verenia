import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as RepositoryActions from '@app/core/store/actions/repository.actions';
import { Repository } from '@app/shared/models/repository.model';


export const repositoryFeatureKey = 'repository';

export interface State extends EntityState<Repository> {
  selectedRepositoryId: number | null;
  isLoading: boolean;
  query: string;
}

export const adapter: EntityAdapter<Repository> = createEntityAdapter<Repository>({
  selectId: (repository: Repository) => repository.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedRepositoryId: null,
  isLoading: false,
  query: '',
});

export const reducer = createReducer(
  initialState,

  on(RepositoryActions.loadRepositories, (state, { query }) => ({
    ...state,
    isLoading: true,
    query,
  })),
  on(RepositoryActions.loadRepositoriesSuccess, (state, { repositories }) => ({
    ...adapter.setAll(repositories, state),
    isLoading: false,
  })),
  on(RepositoryActions.loadRepositoriesFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  // on(RepositoryActions.createFavoriteRepository, (state) => ({
  //   ...state,
  //   isLoading: true,
  // })),
  // on(RepositoryActions.createFavoriteRepositorySuccess, (state) => ({
  //   ...state,
  //   isLoading: false,
  // })),
  // on(RepositoryActions.createFavoriteRepositoryFailure, (state, { error }) => ({
  //   ...state,
  //   error,
  //   isLoading: false,
  // })),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getSelectedRepositoryId = (state: State) => state.selectedRepositoryId;
export const selectIsLoading = (state: State) => state.isLoading;
export const selectRepositoryQuery = (state: State) => state.query;
