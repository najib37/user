export class User {
  id?: string;
  email?: string;
  username?: string;
  name?: string;
  avatar?: string;
  status?: string;

  twoFactorEnabled?: boolean;
  twoFactor?: string;
  friends?: User[]
}
