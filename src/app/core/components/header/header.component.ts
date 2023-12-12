import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TopLeaguesComponent } from '../top-leagues/top-leagues.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TopLeaguesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() title = '';
}
