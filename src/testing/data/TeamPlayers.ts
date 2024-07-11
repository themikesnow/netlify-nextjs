import { TeamPlayer } from '@app-types';

const TeamPlayers: TeamPlayer[] = [];

for (let i = 0; i < 10; i++) {
  TeamPlayers.push({
    id: i,
    dateOfBirth: '2020-01-01',
    documentation: '',
    documentationPath: '',
    firstName: `First - ${i}`,
    jerseyNumber: `${i}`,
    jerseyNumberInt: i,
    lastName: `Last - ${i}`,
    middleName: '',
    profilePic: '',
    pictureFileName: `Picture - ${i}`,
    primaryPosition: 'BASKETBALL_PG',
    // profilePic: `/images/Picture - ${i}`,
    secondaryPosition: 'BASKETBALL_PG',
    teamColor: '#7ed321',
    teamId: i,
    teamName: `Team Name - ${i}`,
    // team: Teams[0],
    team: null,
    manualBoxscores: [],
    tournamentPlayerStats: [],
    hasStats: true,
  });
}

export { TeamPlayers };
export default TeamPlayers;
