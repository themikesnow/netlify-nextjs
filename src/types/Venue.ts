import User from './User';
type Venue = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  hasGames: boolean;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  owner: User;
  postalCode: string;
  state: string;
};

export default Venue;
