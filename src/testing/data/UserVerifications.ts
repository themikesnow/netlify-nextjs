import { UserVerification } from '@app-types';

import Users from './Users';

const UserVerifications: UserVerification[] = [];

for (let i = 0; i < 2; i++) {
  UserVerifications.push({
    activatedOn: '',
    activationKey: `key=${i}`,
    type: 'type-test',
    user: Users[0],
  });
}

export default UserVerifications;
