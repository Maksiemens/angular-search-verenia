import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@app/core/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Repository } from '@app/shared/models/repository.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public isLoading$!: Observable<boolean>;
  public repositories$!: Observable<Repository[]>;
  public selectOptionList$!: Observable<string[]>;
  public repositorySearch$!: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(fromRoot.selectIsRepositoriesLoading));
    this.repositories$ = this.store.pipe(select(fromRoot.selectAllAvailableRepositories));
    this.selectOptionList$ = this.store.pipe(select(fromRoot.selectAllRepositoriesLanguage));
    this.repositorySearch$ = this.store.pipe(select(fromRoot.selectRepositorySearch));
  }

  searchRepository(query: string): void {
    this.store.dispatch(fromRoot.setRepositoryFilter({ search: { query, filter: '' } }));
    this.store.dispatch(fromRoot.loadRepositories());
  }

  filterRepository(filter: string): void {
    this.store.dispatch(fromRoot.setRepositoryFilter({ search: { filter } }));
  }

  toggleToFavorite(repository: Repository): void {
    repository = {
      ...repository,
      isFavorite: true
    }
    this.store.dispatch(fromRoot.addRepositoryToFavorite({ repository }));
  }
}
