import { Component, ChangeDetectionStrategy } from "@angular/core";
import { UiSidebarItem } from "@nx-monorepo-demo/shared/ui/sidebar";

@Component({
  selector: "nx-monorepo-demo-second-client-shell-layout",
  templateUrl: "./second-client-shell-layout.component.html",
  styleUrls: ["./second-client-shell-layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondClientShellLayoutComponent {
  readonly sidebarItems: UiSidebarItem[] = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Broken products link",
      link: "/products",
    },
  ];
}
