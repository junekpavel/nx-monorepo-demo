import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerErrorPageComponent } from './server-error-page/server-error-page.component';

const routes: Routes = [
  {
    path: 'server-error',
    component: ServerErrorPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerErrorPageRoutingModule { }
