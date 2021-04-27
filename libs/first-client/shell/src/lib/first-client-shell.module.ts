import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstClientShellRoutingModule } from './first-client-shell-routing.module';
import { FirstClientShellLayoutModule } from './first-client-shell-layout/first-client-shell-layout.module';


@NgModule({
  imports: [
    CommonModule,
    FirstClientShellLayoutModule,
    FirstClientShellRoutingModule,
  ]
})
export class FirstClientShellModule { }
