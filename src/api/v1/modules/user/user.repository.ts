import { UserCreateDto, UserLoginDto } from './user.dto';
import UserModel from './user.model';

export const create = async ({ email, password }: UserCreateDto) => {
  try {
    return await UserModel.create({ email, password });
  } catch (err: any) {
    throw new Error(err.message);
  }

  // short: return UserModel.create({ email, password });
};

export const get = async ({ email, password }: UserLoginDto) => {
  try {
    return await UserModel.findOne({ email, password });
  } catch (err: any) {
    throw new Error(err.message);
  }

  // short: return UserModel.create({ email, password });
};

const UserRepository = { create, get };

export default UserRepository;
