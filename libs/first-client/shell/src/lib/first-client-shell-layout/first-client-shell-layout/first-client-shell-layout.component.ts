import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiSidebarItem } from '@nx-monorepo-demo/shared/ui/sidebar';

@Component({
  selector: 'nx-monorepo-demo-first-client-shell-layout',
  templateUrl: './first-client-shell-layout.component.html',
  styleUrls: ['./first-client-shell-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstClientShellLayoutComponent {

  readonly sidebarItems: UiSidebarItem[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Products',
      link: '/products',
    },
  ];

}
