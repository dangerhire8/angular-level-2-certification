import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IStandingsEntry } from '../../../core/types/league';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandingsComponent {
  @Input() data: IStandingsEntry[];
}
