import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import * as fromRoot from '@app/core/store';
import { Repository } from '@app/shared/models/repository.model';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public repositories$!: Observable<Repository[]>;
  public repositoriesLanguage$!: Observable<string[]>;

  public isSidenavActive$!: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fromRoot.loadRepositories());

    this.isSidenavActive$ = this.store.pipe(select(fromRoot.selectIsSidenavActive));
    this.repositories$ = this.store.pipe(select(fromRoot.selectAllRepositories));

    this.repositoriesLanguage$ = this.store.pipe(select(fromRoot.selectAllRepositoriesLanguage));
  }

  trackByIdFn(index: number, item: Repository): number {
    return item.id;
  }

  trackByIndex(index: number, item: string): number {
    return index;
  }

  toggleToFavorite(repository: Repository): void {
    // this.store.dispatch(fromRoot.toggleToFavorite({ repository }));
    // фильтрация происходит по  repository.language
  }

  repositoryLanguagChange(event: MatSelectChange): void {
    console.log(event);
    console.log(event.value);

    this.repositories$ = this.store.pipe(select(fromRoot.selectAllRepositoriesByLanguage(event.value)));
  }

  openSidenav(): void {
    this.store.dispatch(fromRoot.openSidenav());
  }

  closeSidenav(): void {
    this.store.dispatch(fromRoot.closeSidenav());
  }
}
