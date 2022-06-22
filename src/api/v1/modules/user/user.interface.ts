export type UserCreateType = {
  email: string;
  password: string;
};

export type UserUpdateType = {
  email?: string;
  password?: string;
};

export type UserReplaceType = {
  email: string;
  password: string;
};
