import express from "express";
import routes from "../routes";
import { home, login, profile, photos } from "../controller/hwController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.profile, profile);
globalRouter.get(routes.photos, photos);

export default globalRouter;
