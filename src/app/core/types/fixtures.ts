export interface IFixtureMatchData {
  fixture: IFixture;
  league: IFixtureLeague;
  teams: IFixtureTeams;
  goals: IGoals;
  score: IFixtureScore;
}

export interface IFixtureTeams {
  home: IFixtureTeam;
  away: IFixtureTeam;
}

export interface IGoals {
  home: number | null;
  away: number | null;
}

interface IFixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: { first: number; second: number };
  venue: { id: number; name: string; city: string };
  status: { long: string; short: string; elapsed: number };
}

interface IFixtureLeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface IFixtureTeam {
  id: number;
  name: string;
  logo: string;
  winner: null | boolean;
}

interface IFixtureScore {
  halftime: IGoals;
  fulltime: IGoals;
  extratime: IGoals;
  penalty: IGoals;
}
