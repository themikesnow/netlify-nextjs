import { Venue } from '@app-types';

import User from './Users';

const Venues: Venue[] = [];

Venues.push({
  addressLine1: 'HH-13 Calle A',
  addressLine2: '',
  city: 'Vega Baja',
  id: 38,
  latitude: 18.435,
  longitude: -66.403,
  name: 'CCCCCCancha Altura de Vega Baja',
  owner: User[0],
  postalCode: '00693',
  state: 'Puerto Rico',
  hasGames: false,
});

export default Venues;
