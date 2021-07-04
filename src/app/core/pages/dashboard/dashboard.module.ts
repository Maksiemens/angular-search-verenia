import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '@app/core/pages/dashboard/dashboard-routing.module';
import { SearchModule } from '@app/shared/components/search/search.module';
import { FilterModule } from '@app/shared/components/filter/filter.module';
import { RepositoryCardsModule } from '@app/shared/components/repository-cards/repository-cards.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SearchModule,
    FilterModule,
    RepositoryCardsModule,
  ],
})
export class DashboardModule {}
