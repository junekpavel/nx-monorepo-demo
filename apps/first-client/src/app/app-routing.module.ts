import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'error',
    loadChildren: () => import('@nx-monorepo-demo/shared/segments/errors/shell').then(mod => mod.SharedSegmentsErrorsShellModule),
  },
  {
    path: '',
    loadChildren: () => import('@nx-monorepo-demo/first-client/shell').then(mod => mod.FirstClientShellModule),
  },
  {
    path: '**',
    redirectTo: 'error/not-found'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
