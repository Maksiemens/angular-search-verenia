import { createAction, props } from '@ngrx/store';

export const checkAuth = createAction(
  '[Auth] Check Auth'
);
export const checkAuthSuccess = createAction(
  '[Auth] Check Auth Success',
  props<{ isAuthenticated: boolean }>(),
);
export const checkAuthFailure = createAction(
  '[Auth] Check Auth Failure',
  props<{ isAuthenticated: boolean }>(),
);

export const login = createAction(
  '[Auth/API] Check Auth'
);
export const loginSuccess = createAction(
  '[Auth/API] Login Success',
);
export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: any }>(),
);

export const checkForUpdatesApp = createAction(
  '[Auth] Check For Updates App',
);
