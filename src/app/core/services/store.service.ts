import { Injectable, signal } from '@angular/core';
import { AVAILABLE_LEAGUES } from '../configs/available-leagues';
const LEAGUE_ID = 'leagueId';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  season = new Date().getFullYear();
  selectedLeagueId = signal<number>(this.defaultLeagueId());

  selectLeague(id: number): void {
    this.selectedLeagueId.set(id);
    sessionStorage.setItem(LEAGUE_ID, id.toString());
  }

  private defaultLeagueId(): number {
    const leagueId = sessionStorage.getItem(LEAGUE_ID);
    return leagueId ? +leagueId : AVAILABLE_LEAGUES[0].id;
  }
}
