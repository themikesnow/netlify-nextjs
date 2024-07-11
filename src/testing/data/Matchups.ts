import { Matchup } from '@app-types';

import Teams from './Teams';
const Matchups: Matchup[] = [
  {
    id: 1,
    position: 0,
    round: 2,
    spacer: false,
    team1: Teams[0],
    team2: Teams[1],
  },
  {
    id: 2,
    position: 0,
    round: 2,
    spacer: false,
    team1: Teams[0],
    team2: Teams[1],
  },
];

export default Matchups;
