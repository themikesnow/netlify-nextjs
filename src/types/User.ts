import Authority from './Authority';
import Person from './Person';
import Venue from './Venue';

type User = Person & {
  authorities: Authority[];
  firstName: string;
  id: number;
  lastName: string;
  middleName: string;
  phoneNumber?: string;
  profilePic: string;
  profilePicFileName: string;
  tournamentCredits: number;
  username: string;
  venues: Venue[];
};

export default User;
