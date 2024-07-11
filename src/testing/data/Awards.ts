import { Award } from '@app-types';

import Categories from './Categories';
import TeamPlayers from './TeamPlayers';
import Tournaments from './Tournaments';

const Awards: Award[] = [];

for (let i = 1; i < 10; i++) {
  Awards.push({
    id: 34,
    award: {
      id: 338,
      category: 'LKP_AWARD',
      position: 0,
      subCategory: null,
      translationKey: 'clashstats.award.finalMostValuablePlayer',
    },
    category: Categories[0],
    teamPlayer: TeamPlayers[0],
    tournament: Tournaments[0],
  });
}

export default Categories;
