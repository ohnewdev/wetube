import express from "express";
import routes from "../routes";
import { courses, lnew, mine } from "../controller/controllers";

const courseRouter = express.Router();

courseRouter.get(routes.courses, courses);
courseRouter.get(routes.lnew, lnew);
courseRouter.get(routes.mine, mine);

export default courseRouter;
