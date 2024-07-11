import { TournamentTeam } from '@app-types';

import Categories from './Categories';
import Divisions from './Divisions';
import Teams from './Teams';
import Tournaments from './Tournaments';

const TournamentTeams: TournamentTeam[] = [];
TournamentTeams.push({
  tournament: Tournaments[0],
  accepted: true,
  category: Categories[0],
  hasGames: true,
  id: 1,
  team: Teams[0],
  division: Divisions[0],
  reCaptchaResponse: '',
  allowOrganizerChanges: false,
});

export { TournamentTeams };
export default TournamentTeams;
