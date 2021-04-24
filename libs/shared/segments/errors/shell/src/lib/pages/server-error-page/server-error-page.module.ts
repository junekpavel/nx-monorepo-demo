import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorPageRoutingModule } from './server-error-page-routing.module';
import { ServerErrorPageComponent } from './server-error-page/server-error-page.component';


@NgModule({
  declarations: [
    ServerErrorPageComponent
  ],
  imports: [
    CommonModule,
    ServerErrorPageRoutingModule
  ]
})
export class ServerErrorPageModule { }
