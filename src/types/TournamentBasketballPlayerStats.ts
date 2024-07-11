import TeamPlayer from './TeamPlayer';
import TournamentBasketballStats from './TournamentBasketballStats';

type TournamentBasketballPlayerStats = TournamentBasketballStats & {
  teamPlayer: TeamPlayer;
};

export default TournamentBasketballPlayerStats;
