import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { StoreService } from '../core/services/store.service';
import { IFixtureMatchData } from '../core/types/fixtures';
import { ILeague } from '../core/types/league';
import { HttpApiClientService } from './http-api-client.service';

interface LeaguesResponse {
  league: ILeague;
}

@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  private httpApi = inject(HttpApiClientService);
  private storeService = inject(StoreService);

  private leagueId$ = toObservable(this.storeService.selectedLeagueId);
  private cachedData = new Map<number, ILeague>();

  league$ = this.leagueId$.pipe(
    switchMap((id) => this.getLeague(id)),
    shareReplay(1)
  );

  standings$ = this.league$.pipe(map((l) => l.standings.flatMap((s) => s)));

  getTeamFixtures = (teamId: number): Observable<IFixtureMatchData[]> => {
    return this.httpApi.get<IFixtureMatchData[]>(
      `/fixtures?league=${this.storeService.selectedLeagueId()}&team=${teamId}&season=${
        this.storeService.season
      }`
    );
  };

  private getLeague(id: number): Observable<ILeague> {
    if (this.cachedData.has(id)) {
      return of(this.cachedData.get(id) as ILeague);
    } else {
      return this.httpApi
        .get<LeaguesResponse[]>(
          `/standings?league=${id}&season=${this.storeService.season}`
        )
        .pipe(
          map((response) => response[0].league),
          tap((l) => this.cachedData.set(id, l))
        );
    }
  }
}
