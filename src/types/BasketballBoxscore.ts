import Game from './Game';
import TeamPlayer from './TeamPlayer';
type BasketballBoxscore = {
  assists: number;
  blockedShots: number;
  defensiveRebounds: number;
  fieldGoalAttempts: number;
  fieldGoalMade: number;
  freeThrowAttempts: number;
  freeThrowMade: number;
  game: Game;
  id: number;
  minutes: number;
  offensiveRebounds: number;
  period: number;
  personalFouls: number;
  seconds: number;
  steals: number;
  teamPlayer: TeamPlayer;
  technicalFouls: number;
  threePointAttempts: number;
  threePointMade: number;
  totalPoints: number;
  totalRebounds: number;
  turnovers: number;
  twoPointAttempts: number;
  twoPointMade: number;
};

export default BasketballBoxscore;
