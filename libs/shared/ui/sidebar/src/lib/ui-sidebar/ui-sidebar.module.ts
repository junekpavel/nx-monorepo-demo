import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UiSidebarComponent } from "./ui-sidebar/ui-sidebar.component";
import { UiSidebarItemComponent } from "./ui-sidebar-item/ui-sidebar-item.component";

@NgModule({
  declarations: [UiSidebarComponent, UiSidebarItemComponent],
  exports: [UiSidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class UiSidebarModule {}
