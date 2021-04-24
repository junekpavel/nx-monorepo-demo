import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundErrorPageComponent } from './not-found-error-page/not-found-error-page.component';
import { NotFoundErrorPageRoutingModule } from './not-found-error-page-routing.module';



@NgModule({
  declarations: [
    NotFoundErrorPageComponent,
  ],
  imports: [
    CommonModule,
    NotFoundErrorPageRoutingModule,
  ]
})
export class NotFoundErrorPageModule { }
