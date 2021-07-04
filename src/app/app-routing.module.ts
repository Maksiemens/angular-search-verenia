import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FavoriteGuard } from '@app/core/guards/favorite.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    data: { page: 'home' },
    loadChildren: () =>
      import('@app/core/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
  },
  {
    path: 'favorite',
    data: { page: 'favorite' },
    canActivate: [FavoriteGuard],
    loadChildren: () =>
      import('@app/favorite/favorite.module').then((m) => m.FavoriteModule),
  },
  // TODO NOT FOUND Component 404
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
