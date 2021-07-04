import { createSelector } from '@ngrx/store';
import * as fromRepository from '../reducers/repository.reducer';
import { selectRepositoryState } from '@app/core/store/reducers';
import { Repository } from '@app/shared/models/repository.model';

export const selectIsRepositoriesLoading = createSelector(
  selectRepositoryState,
  fromRepository.selectIsLoading,
);

export const selectRepositoryIds = createSelector(
  selectRepositoryState,
  fromRepository.selectIds,
);

export const selectRepositoryEntities = createSelector(
  selectRepositoryState,
  fromRepository.selectEntities,
);

export const selectRepositories = createSelector(
  selectRepositoryState,
  fromRepository.selectAll,
);

export const selectAllRepositories = createSelector(
  selectRepositories,
  (allRepositories) =>
    allRepositories.map((repository: Repository) => ({
      ...repository,
      isFavorite: false,
    })),
);

export const selectRepositoryTotal = createSelector(
  selectRepositoryState,
  fromRepository.selectTotal,
);

export const selectCurrentRepositoryId = createSelector(
  selectRepositoryState,
  fromRepository.getSelectedRepositoryId,
);

export const selectCurrentRepository = createSelector(
  selectRepositoryEntities,
  selectCurrentRepositoryId,
  (repositoryEntities, repositoryId: number | null) => {
    if (repositoryId) {
      return repositoryEntities[repositoryId];
    }

    return repositoryId;
  },
);

export const selectAllRepositoriesLanguage = createSelector(
  selectAllRepositories,
  (allRepositories: Repository[]) => {
    return allRepositories
      .map((repository: Repository) => repository.language)
      .filter(
        (language: string, index: number, languages: string[]) =>
          languages.indexOf(language) === index && language,
      );
  },
);

export const selectRepositorySearch = createSelector(
  selectRepositoryState,
  fromRepository.selectRepositorySearch,
);

export const selectAllAvailableRepositories = createSelector(
  selectAllRepositories,
  selectRepositorySearch,
  (allRepositories: Repository[], repositorySearch) => {
    if (repositorySearch.filter) {
      return allRepositories.filter(
        (repository: Repository) =>
          repository.language === repositorySearch.filter,
      );
    }
    return allRepositories;
  },
);
