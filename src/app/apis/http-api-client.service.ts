import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

const API_KEY = '27ab75c31c6076004974b3b94e24690a';

interface IApiResponse {
  errors: {
    [type: string]: string;
  };
  get: string;
  paging: {
    current: number;
    total: number;
  };
  parameters: {
    league: string;
    season: string;
  };
  response: unknown;
  results: number;
}

@Injectable({
  providedIn: 'root',
})
export class HttpApiClientService {
  private http = inject(HttpClient);

  get<T>(url: string) {
    return this.http
      .get<IApiResponse>(`api/${url}`, {
        headers: {
          'x-apisports-key': API_KEY,
        },
      })
      .pipe(
        map((response) => {
          const errorKeys = Object.keys(response.errors);
          if (errorKeys?.length > 0) {
            throw new Error(
              errorKeys
                .map((key) => `${key} - ${response.errors[key]}`)
                .join('\n')
            );
          }
          return response;
        }),
        map((response) => response.response as T)
      );
  }
}
