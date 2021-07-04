import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePageComponent } from '@app/favorite/pages/favorite-page/favorite-page.component';

export const routes: Routes = [
  {
    path: '',
    component: FavoritePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule { }
