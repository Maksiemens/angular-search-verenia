import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryCardComponent } from './repository-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RepositoryCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [RepositoryCardComponent],
})
export class RepositoryCardModule {}
