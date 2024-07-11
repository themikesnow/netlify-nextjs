import { TeamPlayer } from './index';

import Franchise from './Franchise';
import Personnel from './Personnel';
import TournamentTeam from './TournamentTeam';
import User from './User';

type Team = {
  assistantCoach: Personnel;
  city: string;
  coach: Personnel;
  color: string;
  franchise: Franchise;
  id: number;
  insurancePolicyNumber: string;
  insuranceProvider: string;
  logo: string;
  logoFileName: string;
  name: string;
  owner: User;
  phoneNumber?: string;
  rosterName: string;
  state: string;
  teamOwner: Personnel;
  teamPlayers: TeamPlayer[];
  tournamentTeam: TournamentTeam;
  waiver: string;
  waiverPath: string;
};

export default Team;
