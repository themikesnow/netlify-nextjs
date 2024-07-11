import { BasketballBoxscore } from '@app-types';

// import Games from './Games';
import TeamPlayer from './TeamPlayers';

const BasketballBoxscores: BasketballBoxscore[] = [];

for (let i = 0; i < 10; i++) {
  BasketballBoxscores.push({
    id: i,
    assists: i,
    blockedShots: i,
    defensiveRebounds: i,
    fieldGoalAttempts: i,
    fieldGoalMade: i,
    freeThrowAttempts: 0,
    freeThrowMade: i,
    minutes: i,
    offensiveRebounds: i,
    period: 1,
    personalFouls: i,
    seconds: 0,
    steals: i,
    teamPlayer: TeamPlayer[i],
    threePointAttempts: i,
    threePointMade: i,
    totalPoints: i,
    totalRebounds: i,
    turnovers: i,
    twoPointAttempts: i,
    twoPointMade: i,
    game: null, //Games[0],
    technicalFouls: 0,
  });
}

export default BasketballBoxscores;
