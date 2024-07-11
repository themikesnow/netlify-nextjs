import User from './User';

type UserVerification = {
  activatedOn: string;
  activationKey: string;
  type: string;
  user: User;
};

export default UserVerification;
