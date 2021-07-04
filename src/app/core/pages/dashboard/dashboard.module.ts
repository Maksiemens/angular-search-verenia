import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '@app/core/pages/dashboard/dashboard-routing.module';
import { RepositoryCardModule } from '@app/shared/components/repository-card/repository-card.module';
import { SearchModule } from '@app/shared/components/search/search.module';
import { FilterModule } from '@app/shared/components/filter/filter.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    RepositoryCardModule,
    SearchModule,
    FilterModule,
  ],
})
export class DashboardModule {}
