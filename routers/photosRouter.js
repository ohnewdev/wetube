import express from "express";
import routes from "../routes";
const photosRouter = express.Router();

photosRouter.get(routes.photos, (req, res) => res.send("Photos"));

export default photosRouter;
