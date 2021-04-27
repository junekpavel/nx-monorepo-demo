import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UiSidebarItem } from '../ui-sidebar/ui-sidebar-item';

@Component({
  selector: 'nx-monorepo-demo-ui-sidebar-item',
  templateUrl: './ui-sidebar-item.component.html',
  styleUrls: ['./ui-sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSidebarItemComponent {

  @Input() item!: UiSidebarItem;

}
