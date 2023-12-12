import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { map } from 'rxjs';
import { FootballApiService } from '../../apis/football-api.service';
import { IDetailsData } from './details.component';

export const detailsResolver: ResolveFn<IDetailsData[]> = (route) => {
  return inject(FootballApiService)
    .getTeamFixtures(route.params['id'])
    .pipe(
      map((response) => response.slice(0, 10)),
      map((list) =>
        list.map((item) => ({
          teams: item.teams,
          goals: item.goals,
        }))
      )
    );
};
