import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstClientShellLayoutComponent } from './first-client-shell-layout/first-client-shell-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FirstClientShellLayoutComponent
  ],
  exports: [
    FirstClientShellLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FirstClientShellLayoutModule { }
