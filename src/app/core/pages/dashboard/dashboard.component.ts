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

  constructor(
    private store: Store<fromRoot.State>,
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(fromRoot.selectIsRepositoriesLoading));
    this.repositories$ = this.store.pipe(select(fromRoot.selectAllRepositories));
    this.selectOptionList$ = this.store.pipe(select(fromRoot.selectAllRepositoriesLanguage));
  }

  searchRepository(query: string): void {
    this.store.dispatch(fromRoot.loadRepositories({ query }));
  }

  filterRepository(language: string): void {
    // this.repositories$ = this.store.pipe(select(fromRoot.selectAllRepositoriesByLanguage(event.value)));
  }

  toggleToFavorite(repository: Repository): void {
    console.log(repository);
    // this.store.dispatch(fromRoot.toggleToFavorite({ repository }));
    // фильтрация происходит по  repository.language
  }
}
