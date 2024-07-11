import { BasketballBoxscore, Person, Team, TournamentBasketballPlayerStats } from './index';

type TeamPlayer = Person & {
  documentation: string;
  documentationPath: string;
  hasStats: boolean;
  id: number;
  jerseyNumber: string;
  jerseyNumberInt: number;
  manualBoxscores: BasketballBoxscore[];
  pictureFileName: string;
  primaryPosition: string;
  profilePic: string;
  secondaryPosition: string;
  team: Team;
  teamColor: string;
  teamId: number;
  teamName: string;
  tournamentPlayerStats: TournamentBasketballPlayerStats[];
};

export default TeamPlayer;
