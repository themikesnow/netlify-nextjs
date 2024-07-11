import { Game } from '@app-types';

import BasketballBoxscore from './BasketballBoxscores';
import Categories from './Categories';
import Team from './Teams';
import Tournaments from './Tournaments';
import Venues from './Venues';
const Games: Game[] = [];

Games.push({
  id: 1001,
  awayTeam: Team[0],
  awayTeamScore: 18,
  category: Categories[0],
  confiscatedGameWinner: null,
  gameDate: '2021-12-04T13:30:00.000+0000',
  homeTeam: Team[1],
  homeTeamScore: 51,
  manualBoxscores: BasketballBoxscore,
  matchup: null,
  periodScores: [
    { id: 6581, period: 1, score: 8, teamID: 547, team: Team[0], scoresRaw: [] },
    { id: 6582, period: 2, score: 2, teamID: 547, team: Team[0], scoresRaw: [] },
    { id: 6583, period: 3, score: 6, teamID: 547, team: Team[0], scoresRaw: [] },
    { id: 6584, period: 4, score: 2, teamID: 547, team: Team[0], scoresRaw: [] },
    { id: 6585, period: 1, score: 11, teamID: 574, team: Team[1], scoresRaw: [] },
    { id: 6586, period: 2, score: 16, teamID: 574, team: Team[1], scoresRaw: [] },
    { id: 6587, period: 3, score: 16, teamID: 574, team: Team[1], scoresRaw: [] },
    { id: 6588, period: 4, score: 8, teamID: 574, team: Team[1], scoresRaw: [] },
  ],
  roundRobin: false,
  tournament: Tournaments[0],
  venue: Venues[0],
  officials: [],
});

export { Games };
export default Games;
