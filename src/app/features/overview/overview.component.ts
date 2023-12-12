import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { catchError, ignoreElements, map } from 'rxjs/operators';
import { FootballApiService } from '../../apis/football-api.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { StandingsComponent } from './standings/standings.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, HeaderComponent, StandingsComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  footballApiService = inject(FootballApiService);

  standings$ = this.footballApiService.standings$.pipe(
    map((standings) => standings.sort((a, b) => a.rank - b.rank))
  );

  error$ = this.standings$.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  );
}
