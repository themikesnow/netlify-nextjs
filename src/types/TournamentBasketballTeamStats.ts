import Team from './Team';
import TournamentBasketballStats from './TournamentBasketballStats';

type TournamentBasketballTeamStats = TournamentBasketballStats & {
  team: Team;
};

export default TournamentBasketballTeamStats;
