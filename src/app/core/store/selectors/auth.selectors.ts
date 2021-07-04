import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const selectIsLoading = createSelector(
  selectAuthState,
  fromAuth.selectIsLoading,
);

export const selectError = createSelector(
  selectAuthState,
  fromAuth.selectError,
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  fromAuth.selectIsAuthenticated,
);
