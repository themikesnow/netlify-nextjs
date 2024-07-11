import Category from './Category';
import Division from './Division';
import Team from './Team';
import Tournament from './Tournament';

type Standings = {
  awayLoses: number;
  awayWins: number;
  category: Category;
  division: Division;
  gamesBack: number;
  homeLoses: number;
  homeWins: number;
  id: number;
  lastTen: string;
  streak: string;
  team: Team;
  tieBreakerOrder: number;
  tournament: Tournament;
  winningPercentage: string;
};

export default Standings;
