import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-monorepo-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
