import Team from './Team';
type Matchup = {
  id: number;
  position: number;
  round: number;
  spacer: boolean;
  team1: Team;
  team2: Team;
};

export default Matchup;
