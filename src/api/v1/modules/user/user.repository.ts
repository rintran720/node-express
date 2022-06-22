import {
  UserCreateType,
  UserReplaceType,
  UserUpdateType,
} from './user.interface';
import UserModel from './user.model';

export const create = async ({ email, password }: UserCreateType) => {
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

export const update = async (id: string, updateObj: UserUpdateType) => {
  try {
    return await UserModel.findOneAndUpdate({ _id: id }, updateObj);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const replace = async (id: string, replaceObj: UserReplaceType) => {
  try {
    const user = await UserModel.findOne({ _id: id });
    if (!user) throw new Error('The user unexisted!');

    return await UserModel.findOneAndReplace(
      { _id: id },
      { ...replaceObj, password: user.password },
    );
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const UserRepository = { create, get, update, replace };

export default UserRepository;
