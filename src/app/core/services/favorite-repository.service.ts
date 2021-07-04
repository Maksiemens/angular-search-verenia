import { Injectable } from '@angular/core';
import { BrowserStorageService } from '@app/core/services/browser-storage.service';
import { Repository } from '@app/shared/models/repository.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FavoriteRepositoryService {
  private favoriteRepositoriesKey = 'favorite-repositories-app';

  constructor(private browserStorageService: BrowserStorageService) {}

  loadFavoriteRepositories(): Observable<Repository[]> {
    return this.browserStorageService.supported().pipe(
      map(() => this.browserStorageService.get(this.favoriteRepositoriesKey)),
      map((value: string | null) => (value ? JSON.parse(value) : [])),
    );
  }

  addRepositoryToFavorite(records: Repository[]): Observable<Repository[]> {
    return this.loadFavoriteRepositories().pipe(
      map((value: Repository[]) => [...value, ...records]),
      tap((value: Repository[]) =>
        this.browserStorageService.set(
          this.favoriteRepositoriesKey,
          JSON.stringify(value),
        ),
      ),
    );
  }

  removeRepositoryFromFavorite(ids: number[]): Observable<Repository[]> {
    return this.loadFavoriteRepositories().pipe(
      map((value: Repository[]) =>
        value.filter((item) => !ids.includes(item.id)),
      ),
      tap((value: Repository[]) =>
        this.browserStorageService.set(
          this.favoriteRepositoriesKey,
          JSON.stringify(value),
        ),
      ),
    );
  }
}
