import { Request, Response } from 'express';
import { errorFormater, successFormater } from '../../utils/responseFormater';
import BookRepository from './book.repository';

export const create = async (req: Request, res: Response) => {
  try {
    const { name, desc, author } = req.body;
    const book = await BookRepository.create({ name, desc, author });

    return res.status(200).json(successFormater(book));
  } catch (err: any) {
    return res.status(401).json(errorFormater(err.message));
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await BookRepository.get({ _id: id });

    if (!book) throw new Error('The book unexist');

    return res.status(200).json(successFormater(book));
  } catch (err: any) {
    return res.status(401).json(errorFormater(err.message));
  }
};

export const getlist = async (req: Request, res: Response) => {
  try {
    const books = await BookRepository.getlist({});

    return res.status(200).json(successFormater(books));
  } catch (err: any) {
    return res.status(401).json(errorFormater(err.message));
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    console.log(obj);

    await BookRepository.update(id, obj);
    const book = await BookRepository.get({ _id: id });

    if (!book) throw new Error('The book unexisted');

    return res.status(200).json(successFormater(book));
  } catch (err: any) {
    return res.status(401).json(errorFormater(err.message));
  }
};

export const replace = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    console.log(obj);

    await BookRepository.replace(id, obj);
    const book = await BookRepository.get({ _id: id });

    if (!book) throw new Error('The book unexisted');

    return res.status(200).json(successFormater(book));
  } catch (err: any) {
    return res.status(401).json(errorFormater(err.message));
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const book = await BookRepository.remove(id);

    if (!book) throw new Error('The book unexisted');

    return res.status(200).json(successFormater());
  } catch (err: any) {
    return res.status(401).json(errorFormater(err.message));
  }
};

const BookController = { create, get, getlist, update, replace, remove };

export default BookController;
