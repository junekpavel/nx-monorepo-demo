import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstClientShellLayoutComponent } from './first-client-shell-layout/first-client-shell-layout/first-client-shell-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FirstClientShellLayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('@nx-monorepo-demo/first-client/segments/products/shell').then(mod => mod.ProductsShellModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstClientShellRoutingModule { }
