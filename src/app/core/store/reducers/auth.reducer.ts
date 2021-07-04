import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  error: string | null;
  isLoading: boolean;
}

export const initialState: State = {
  error: null,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.checkForUpdatesApp, (state) => ({
    ...state,
  })),
);

export const selectError = (state: State) => state.error;
export const selectIsLoading = (state: State) => state.isLoading;
