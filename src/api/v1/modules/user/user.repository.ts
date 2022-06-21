import { UserCreateDto, UserUpdateDto } from './user.dto';
import UserModel from './user.model';

export const create = async ({ email, password }: UserCreateDto) => {
  try {
    return await UserModel.create({ email, password });
  } catch (err: any) {
    // throw new Error(err.message);
    throw new Error('Can not create account');
  }
};

export const get = async (query: object) => {
  try {
    return await UserModel.findOne(query);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const update = async (id: string, updateObj: UserUpdateDto) => {
  try {
    return await UserModel.findOneAndUpdate({ _id: id }, updateObj);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const UserRepository = { create, get, update };

export default UserRepository;
