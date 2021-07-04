import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '@app/core/pages/dashboard/dashboard-routing.module';
import { RepositoryCardModule } from '@app/shared/components/repository-card/repository-card.module';


import {MatSelectModule} from '@angular/material/select'


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    RepositoryCardModule,
    MatSelectModule,
  ],
})
export class DashboardModule {}
