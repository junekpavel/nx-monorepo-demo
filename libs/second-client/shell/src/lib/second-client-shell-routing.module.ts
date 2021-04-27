import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondClientShellLayoutComponent } from './second-client-shell-layout/second-client-shell-layout/second-client-shell-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SecondClientShellLayoutComponent,
    children: [
      // ...
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondClientShellRoutingModule { }
