import Team from './Team';
type Franchise = {
  city: string;
  color: string;
  id: number;
  logo: string;
  logoFileName: string;
  name: string;
  phoneNumber: string;
  sport: string;
  state: string;
  teams: Team[];
};

export default Franchise;
