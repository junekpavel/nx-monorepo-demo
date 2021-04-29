import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UiSidebarModule } from "@nx-monorepo-demo/shared/ui/sidebar";
import { FirstClientShellLayoutComponent } from "./first-client-shell-layout/first-client-shell-layout.component";

@NgModule({
  declarations: [FirstClientShellLayoutComponent],
  exports: [FirstClientShellLayoutComponent],
  imports: [CommonModule, RouterModule, UiSidebarModule],
})
export class FirstClientShellLayoutModule {}
