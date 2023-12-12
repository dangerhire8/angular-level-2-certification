export interface ILeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Array<IStandingsEntry[]>;
}

export interface IStandingsEntry {
  rank: number;
  team: ITeam;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: IMatchStats;
  home: IMatchStats;
  away: IMatchStats;
  update: Date;
}

interface ITeam {
  id: number;
  name: string;
  logo: string;
}

interface IMatchStats {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
}