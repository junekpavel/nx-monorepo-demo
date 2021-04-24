import { NgModule } from '@angular/core';
import { NotFoundErrorPageModule } from './pages/not-found-error-page/not-found-error-page.module';
import { ServerErrorPageModule } from './pages/server-error-page/server-error-page.module';

@NgModule({
  imports: [
    NotFoundErrorPageModule,
    ServerErrorPageModule,
  ],
})
export class SharedSegmentsErrorsShellRoutingModule { }
