import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: any | null;
  error: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const initialState: State = {
  user: null,
  error: null,
  isAuthenticated: false,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,

  on(
    AuthActions.checkAuthSuccess,
    AuthActions.checkAuthFailure,
    (state, { isAuthenticated }) => ({
    ...state,
    isAuthenticated,
  })),

  on(AuthActions.login, (state) => ({
    ...state,
    error: null,
    isLoading: true,
  })),
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    error: null,
    isLoading: false,
    isAuthenticated: true,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
);

export const selectUser = (state: State) => state.user;
export const selectError = (state: State) => state.error;
export const selectIsAuthenticated = (state: State) => state.isAuthenticated;
export const selectIsLoading = (state: State) => state.isLoading;
