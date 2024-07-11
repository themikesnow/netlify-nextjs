import { Standings as StandingsType } from '@app-types';

import Categories from './Categories';
import Teams from './Teams';
import Tournaments from './Tournaments';

const Standings: StandingsType[] = [
  {
    id: 1,
    awayLoses: 3,
    awayWins: 1,
    division: null,
    gamesBack: 2,
    homeLoses: 0,
    homeWins: 4,
    lastTen: '5 - 3',
    streak: 'W 2',
    team: Teams[0],
    tieBreakerOrder: 4,
    tournament: Tournaments[0],
    winningPercentage: '.625',
    category: Categories[0],
  },
];

export { Standings };
export default Standings;
