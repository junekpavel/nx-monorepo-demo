import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondClientShellRoutingModule } from './second-client-shell-routing.module';
import { SecondClientShellLayoutModule } from './second-client-shell-layout/second-client-shell-layout.module';


@NgModule({
  imports: [
    CommonModule,
    SecondClientShellRoutingModule,
    SecondClientShellLayoutModule,
  ]
})
export class SecondClientShellModule { }
