import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@app/core/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Repository } from '@app/shared/models/repository.model';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent implements OnInit {
  public isLoading$!: Observable<boolean>;
  public favoriteRepositories$!: Observable<Repository[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(fromRoot.selectIsRepositoriesLoading));
    this.favoriteRepositories$ = this.store.pipe(select(fromRoot.selectAllRepositories));
  }
  toggleToFavorite(repository: Repository): void {
    console.log(repository);
    // this.store.dispatch(fromRoot.toggleToFavorite({ repository }));
    // фильтрация происходит по  repository.language
  }

}
