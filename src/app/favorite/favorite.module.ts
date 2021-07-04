import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { RepositoryCardsModule } from '@app/shared/components/repository-cards/repository-cards.module';

@NgModule({
  declarations: [
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    RepositoryCardsModule,
  ]
})
export class FavoriteModule { }
