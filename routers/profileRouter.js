import express from "express";
import routes from "../routes";
const profileRouter = express.Router();

profileRouter.get(routes.profile, (req, res) => res.send("Profile"));

export default profileRouter;
