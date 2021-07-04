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
        (item: string, index: number, array: string[]) =>
          array.indexOf(item) === index && item,
      );
  },
);

// export const selectAllRepositoriesByLanguage = (language: string) =>
//   createSelector(selectAllRepositories, (allRepositories: Repository[]) => {
//     return allRepositories.filter(
//       (repository: Repository) => repository.language === language,
//     );
//   });

export const selectAllRepositoriesByLanguage = (language: string) =>
  createSelector(selectAllRepositories, (allRepositories: Repository[]) => {
    console.log(language);
    if (language) {
      return allRepositories.filter(
        (repository: Repository) => repository.language === language,
      );
    }
    return allRepositories;
  });
