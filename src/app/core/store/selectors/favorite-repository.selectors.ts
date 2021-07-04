import { createSelector } from '@ngrx/store';
import * as fromSignUp from '../reducers/favorite-repository.reducer';
import { selectSignUpState } from '@app/core/store/reducers';

export const selectIsPositionsLoading = createSelector(
  selectSignUpState,
  fromSignUp.selectIsLoading
);

export const selectPositionIds = createSelector(
  selectSignUpState,
  fromSignUp.selectIds
);

export const selectPositionEntities = createSelector(
  selectSignUpState,
  fromSignUp.selectEntities
);

export const selectAllPositions = createSelector(
  selectSignUpState,
  fromSignUp.selectAll
);

export const selectPositionTotal = createSelector(
  selectSignUpState,
  fromSignUp.selectTotal
);

export const selectCurrentPositionId = createSelector(
  selectSignUpState,
  fromSignUp.getSelectedPositionId
);

export const selectCurrentPosition = createSelector(
  selectPositionEntities,
  selectCurrentPositionId,
  (positionEntities, currentPositionId: number | null) => {
    if (currentPositionId) {
      return positionEntities[currentPositionId];
    }
    return currentPositionId;
  }
);
