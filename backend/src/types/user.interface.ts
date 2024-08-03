interface IUser {
  firstName: string;
  lastName: string;
  email?: string;
  passwordHash?: string;
  avatarUrl: string;
}

export { IUser };
