import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryCardsComponent } from './repository-cards.component';
import { RepositoryCardModule } from '@app/shared/components/repository-card/repository-card.module';


@NgModule({
  declarations: [
    RepositoryCardsComponent
  ],
  imports: [
    CommonModule,
    RepositoryCardModule,
  ],
  exports: [
    RepositoryCardsComponent
  ]
})
export class RepositoryCardsModule { }
