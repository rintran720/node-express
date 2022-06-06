import { Router } from "express";
import { createUser } from "./user.controller";

export const route = Router();

route.post("/", createUser);
