import { RoundCount } from '@app-types';

const RoundCounts: RoundCount[] = [];

for (let i = 1; i < 3; i++) {
  RoundCounts.push({
    roundsCount: 3,
    totalTeams: 8,
  });
}

export default RoundCounts;
