import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstClientShellLayoutComponent } from './first-client-shell-layout/first-client-shell-layout.component';
import { RouterModule } from '@angular/router';
import { UiSidebarModule } from '@nx-monorepo-demo/shared/ui/sidebar';



@NgModule({
  declarations: [
    FirstClientShellLayoutComponent
  ],
  exports: [
    FirstClientShellLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiSidebarModule,
  ]
})
export class FirstClientShellLayoutModule { }
