import User from './User';

type Organizer = User & {
  tournamentCredits: number;
};

export default Organizer;
