import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AVAILABLE_LEAGUES } from '../../configs/available-leagues';
import { ILeagueInfo } from '../../types/league-info';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-top-leagues',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-leagues.component.html',
  styleUrl: './top-leagues.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopLeaguesComponent {
  private storeService = inject(StoreService);

  items: ILeagueInfo[] = AVAILABLE_LEAGUES;
  selectedLeagueId = this.storeService.selectedLeagueId;

  selectLeague(id: number): void {
    this.storeService.selectLeague(id);
  }
}
