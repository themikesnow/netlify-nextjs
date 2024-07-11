import { User } from '@app-types';

const Users: User[] = [];

for (let i = 0; i < 2; i++) {
  Users.push({
    id: i,
    authorities: [{ id: 1, name: 'USER' }],
    dateOfBirth: '2000-01-01',
    displayName: 'G. CRUZ',
    firstName: `First - ${i}`,
    lastName: `Last - ${i}`,
    gender: 'FEMALE',
    middleName: '',
    postalCode: '000000',
    profilePic: null,
    profilePicFileName: '',
    tournamentCredits: 0,
    username: `user-${i}@gmail.com`,
    venues: null,
  });
}

export default Users;
