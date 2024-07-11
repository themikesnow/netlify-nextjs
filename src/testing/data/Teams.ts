import { Team } from '@app-types';

import Staffs from './Staffs';
import User from './Users';

const Teams: Team[] = [];

for (let i = 0; i < 2; i++) {
  Teams.push({
    id: i,
    assistantCoach: Staffs[0],
    city: 'Jest City',
    coach: Staffs[1],
    color: 'theColor',
    insurancePolicyNumber: 'Insurance',
    insuranceProvider: 'Provider',
    logo: '/images/theLogo',
    logoFileName: 'logo.jpeg',
    name: `The Name - ${i}`,
    owner: User[0],
    phoneNumber: '(787) 123-4567',
    rosterName: 'roster',
    teamOwner: Staffs[2],
    state: 'PR',
    teamPlayers: [],
    waiver: null,
    waiverPath: null,
    franchise: null,
    tournamentTeam: null,
  });
}

export { Teams };
export default Teams;
