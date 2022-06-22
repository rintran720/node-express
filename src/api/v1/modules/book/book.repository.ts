import {
  BookCreateType,
  BookReplaceType,
  BookUpdateType,
} from './book.interface';
import BookModel from './book.model';

export const create = async ({ name, desc, author }: BookCreateType) => {
  try {
    return await BookModel.create({ name, desc, author });
  } catch (err: any) {
    // throw new Error(err.message);
    throw new Error('Can not create book');
  }
};

export const get = async (query: object) => {
  try {
    return await BookModel.findOne(query);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const getlist = async (query: object) => {
  try {
    return await BookModel.find(query);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const update = async (id: string, updateObj: BookUpdateType) => {
  try {
    return await BookModel.findOneAndUpdate({ _id: id }, updateObj);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const replace = async (id: string, replaceObj: BookCreateType) => {
  try {
    return await BookModel.findOneAndReplace({ _id: id }, replaceObj);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const remove = async (id: string) => {
  try {
    return await BookModel.findOneAndDelete({ _id: id });
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const BookRepository = { create, get, getlist, replace, update, remove };

export default BookRepository;
