import { FavoriteRepositoryEffects } from '@app/core/store/effects/favorite-repository.effects';
import { RepositoryEffects } from '@app/core/store/effects/repository.effects';
import { AuthEffects } from './auth.effects';

export const effects: any[] = [
  AuthEffects,
  RepositoryEffects,
  FavoriteRepositoryEffects,
];

export * from './auth.effects';
export * from './favorite-repository.effects';
export * from './repository.effects';
