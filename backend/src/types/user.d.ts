interface IUser {
  email: string;
  name: string;
}

interface IUserLogin {
  email: string;

  /**
   * JWT
   */
  token: string;
}

type TUserSignUpInput = IUser;

interface TUserSignInInput {
  email: string;
}
