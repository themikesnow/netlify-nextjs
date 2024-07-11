import BasketballBoxscore from './BasketballBoxscore';
import Category from './Category';
import Matchup from './Matchup';
import PeriodScore from './PeriodScore';
import Personnel from './Personnel';
import Team from './Team';
import Tournament from './Tournament';
import Venue from './Venue';

type TournamentGame = {
  awayTeam: Team;
  awayTeamScore: number;
  category: Category;
  confiscatedGameWinner: Team;
  gameDate: string;
  homeTeam: Team;
  homeTeamScore: number;
  id: number;
  manualBoxscores: BasketballBoxscore[];
  matchup: Matchup;
  officials: Personnel[];
  periodScores: PeriodScore[];
  roundRobin: boolean;
  tournament: Tournament;
  venue: Venue;
};

export default TournamentGame;
