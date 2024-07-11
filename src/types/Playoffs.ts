import Category from './Category';
import Matchup from './Matchup';
import RoundFormat from './RoundFormat';
import Tournament from './Tournament';

type Playoffs = {
  category: Category;
  hasGames: boolean;
  id: number;
  matchups: Matchup[];
  playoffsFormat: 'SINGLE' | 'SERIES';
  roundFormats: RoundFormat[];
  totalTeams: number;
  tournament?: Tournament;
};

export default Playoffs;
