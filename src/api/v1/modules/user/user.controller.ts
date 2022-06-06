import { Request, Response } from "express";
import { trust } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  if (await trust()) return res.send("Hello world");
  else return res.send("Something wrong!");
};
