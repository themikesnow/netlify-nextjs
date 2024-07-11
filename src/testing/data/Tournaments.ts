import { Tournament } from '@app-types';

import Category from './Categories';
import User from './Users';
import Venue from './Venues';

const Tournaments: Tournament[] = [];
Tournaments.push({
  id: 1,
  logo: 'logo',
  champions: [],
  logoFileName: 'logo.jpeg',
  name: 'Torneo Baloncesto 1',
  organizer: User[0],
  registrationFee: 10,
  registrationType: 'Test',
  venues: Venue,
  startDate: '01/01/2020',
  endDate: '01/01/2020',
  registrationDeadline: '01/01/2020',
  categories: Category,
  description: 'The Description',
  registeredTeamsCount: 1,
  minuteRecorded: true,
  scoringTemplate: '',
  twoPointAttemptRecorded: true,
  threePointAttemptRecorded: true,
  freeThrowAttemptRecorded: true,
  assistRecorded: true,
  stealRecorded: true,
  blockedShotRecorded: true,
  personalFoulRecorded: true,
  turnoverRecorded: true,
  reboundingTemplate: '',
  hasRoundRobinGames: false,
  gameSplitTemplate: '',
  regulation: 2,
  pendingApprovalTeamsCount: 0,
  prize: 100,
  teamFormat: 5,
  registrationsAcceptedCount: { 0: 1 },
  registrationsPendingCount: { 1: 1 },
  divisions: [],
  extraTeamDetails: false,
  registrationOpen: true,
  sport: 'BASKETBALL',
  teamPlayersDateOfBirthRequired: false,
  teamPlayersDocumentationRequired: false,
  teamPlayersPositionRequired: false,
  teamWaiverRequired: false,
  technicalFoulRecorded: false,
  registrationsAcceptedCountTotal: 0,
  registrationsPendingCountTotal: 0,
});

export { Tournaments };
export default Tournaments;
