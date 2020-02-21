import express from "express";
import routes from "../routes";
const videoRouter = express.Router();

videoRouter.get(routes.upload, (req, res) => res.send("UPLOADS"));

export default videoRouter;
