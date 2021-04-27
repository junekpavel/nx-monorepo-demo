import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstClientShellLayoutComponent } from './first-client-shell-layout/first-client-shell-layout/first-client-shell-layout.component';
import { FirstClientShellLayoutModule } from './first-client-shell-layout/first-client-shell-layout.module';

const routes: Routes = [
  {
    path: '',
    component: FirstClientShellLayoutComponent,
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstClientShellRoutingModule { }
