import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondClientShellLayoutComponent } from './second-client-shell-layout/second-client-shell-layout.component';
import { RouterModule } from '@angular/router';
import { UiSidebarModule } from '@nx-monorepo-demo/shared/ui/sidebar';



@NgModule({
  declarations: [
    SecondClientShellLayoutComponent
  ],
  exports: [
    SecondClientShellLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiSidebarModule,
  ]
})
export class SecondClientShellLayoutModule { }
