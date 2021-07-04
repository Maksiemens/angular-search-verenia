import { createSelector } from '@ngrx/store';
import * as fromSignUp from '../reducers/favorite-repository.reducer';
import { selectSignUpState } from '@app/core/store/reducers';

export const selectIsFavoriteRepositoriesLoading = createSelector(
  selectSignUpState,
  fromSignUp.selectIsLoading
);

export const selectFavoriteRepositoryIds = createSelector(
  selectSignUpState,
  fromSignUp.selectIds
);

export const selectFavoriteRepositoryEntities = createSelector(
  selectSignUpState,
  fromSignUp.selectEntities
);

export const selectAllFavoriteRepositories = createSelector(
  selectSignUpState,
  fromSignUp.selectAll
);

export const selectFavoriteRepositoryTotal = createSelector(
  selectSignUpState,
  fromSignUp.selectTotal
);

export const selectCurrentFavoriteRepositoryId = createSelector(
  selectSignUpState,
  fromSignUp.getSelectedRepositoryId
);

export const selectCurrentFavoriteRepository = createSelector(
  selectFavoriteRepositoryEntities,
  selectCurrentFavoriteRepositoryId,
  (repositoryEntities, repositoryId: number | null) => {
    if (repositoryId) {
      return repositoryEntities[repositoryId];
    }

    return repositoryId;
  },
);
