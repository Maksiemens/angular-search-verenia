import { createFeatureSelector, Action, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import * as fromNgrxRouter from '@ngrx/router-store';
import * as fromRouter from './router.reducer';
import * as fromUi from './ui.reducer';
import * as fromAuth from './auth.reducer';
import * as fromRepository from './repository.reducer';
import * as fromFavoriteRepository from './favorite-repository.reducer';

export interface State {
  [fromRouter.routerFeatureKey]: fromNgrxRouter.RouterReducerState<fromRouter.RouterState>;
  [fromUi.uiFeatureKey]: fromUi.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromRepository.repositoryFeatureKey]: fromRepository.State;
  [fromFavoriteRepository.favoriteRepositoryFeatureKey]: fromFavoriteRepository.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromRouter.routerFeatureKey]: fromNgrxRouter.routerReducer,
    [fromUi.uiFeatureKey]: fromUi.reducer,
    [fromAuth.authFeatureKey]: fromAuth.reducer,
    [fromRepository.repositoryFeatureKey]: fromRepository.reducer,
    [fromFavoriteRepository.favoriteRepositoryFeatureKey]: fromFavoriteRepository.reducer,
  }),
});

export const selectRouterState = createFeatureSelector<
  fromNgrxRouter.RouterReducerState<fromRouter.RouterState>
>(fromRouter.routerFeatureKey);

export const selectUiState = createFeatureSelector<State, fromUi.State>(
  fromUi.uiFeatureKey
);

export const selectAuthState = createFeatureSelector<State, fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectRepositoryState = createFeatureSelector<State, fromRepository.State>(
  fromRepository.repositoryFeatureKey
);

export const selectSignUpState = createFeatureSelector<State, fromFavoriteRepository.State>(
  fromFavoriteRepository.favoriteRepositoryFeatureKey
);
