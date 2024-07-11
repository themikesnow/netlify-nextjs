import { Playoffs } from '@app-types';

import Categories from './Categories';
import Matchups from './Matchups';
import RoundFormats from './RoundFormats';

const ThePlayoffs: Playoffs[] = [];

ThePlayoffs.push({
  id: 1,
  category: Categories[0],
  hasGames: true,
  matchups: Matchups,
  playoffsFormat: 'SERIES',
  roundFormats: RoundFormats,
  totalTeams: 6,
});

export default ThePlayoffs;
