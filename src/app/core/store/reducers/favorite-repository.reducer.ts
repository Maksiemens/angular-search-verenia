import { Repository } from '@app/shared/models/repository.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as SignUpActions from '../actions/favorite-repository.actions';

export const favoriteRepositoryFeatureKey = 'favorite-repository';

export interface State extends EntityState<Repository> {
  selectedPositionId: number | null;
  isLoading: boolean;
}

export const adapter: EntityAdapter<Repository> = createEntityAdapter<Repository>({
  selectId: (position: Repository) => position.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedPositionId: null,
  isLoading: false,
});

export const reducer = createReducer(
  initialState,

  on(SignUpActions.loadFavoriteRepositories, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(SignUpActions.loadFavoriteRepositoriesSuccess, (state, { repositories }) => ({
    ...adapter.setAll(repositories, state),
    isLoading: false,
  })),
  on(SignUpActions.loadFavoriteRepositoriesFailure, (state, { error }) => ({
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

export const getSelectedPositionId = (state: State) => state.selectedPositionId;
export const selectIsLoading = (state: State) => state.isLoading;
