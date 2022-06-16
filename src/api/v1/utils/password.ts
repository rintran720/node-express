import bcrypt from 'bcrypt';
import config from '../../../common/config';

export type PasswordWithSalt = {
  password: string;
};

export const hashPasswordSync = (password: string) => {
  return bcrypt.hashSync(password, config.server.saltRound);
};

export const comparePasswordSync = (
  password: string,
  hashedPassword: string,
) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const PasswordUtil = {
  hashPasswordSync,
  comparePasswordSync,
};

export default PasswordUtil;
