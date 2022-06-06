import { Router } from "express";
import userRouter from "./modules/user/user.route";

const router = Router();

router.use("/user", userRouter);

export default router;