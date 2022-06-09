import UserModel from './user.model';

export const create = async () => {
  return { name: 'John Smith' };
};

export const get = async () => {
  return { name: 'John Smith' };
};

export const getlist = async () => {
  return [{ name: 'John Smith' }, { name: 'John Smith 2' }];
};
export const update = async () => {
  return { name: 'John Smith 2' };
};
export const replace = async () => {
  return { email: 'rintran720@gmail.com' };
};
export const remove = async () => {
  return {};
};

const UserRepository = { create, get, getlist, update, replace, remove };

export default UserRepository;
