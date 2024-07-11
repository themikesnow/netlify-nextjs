import Category from './Category';
import Division from './Division';
import Team from './Team';
import Tournament from './Tournament';

type TournamentTeam = {
  accepted: boolean;
  allowOrganizerChanges: boolean;
  category: Category;
  division?: Division;
  hasGames?: boolean;
  id: number;
  reCaptchaResponse?: string;
  team: Team;
  tournament: Tournament;
};

export default TournamentTeam;
