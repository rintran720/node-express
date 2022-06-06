import { Router } from "express";
import userRoute from "./modules/user/user.route";

const route = Router();

route.use("/user", userRoute);
