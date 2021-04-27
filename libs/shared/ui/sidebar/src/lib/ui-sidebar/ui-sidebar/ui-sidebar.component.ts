import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UiSidebarItem } from './ui-sidebar-item';

@Component({
  selector: 'nx-monorepo-demo-ui-sidebar',
  templateUrl: './ui-sidebar.component.html',
  styleUrls: ['./ui-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSidebarComponent {

  @Input() items: UiSidebarItem[] = [];

}
