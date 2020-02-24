import express from "express";
import routes from "../routes";
const loginRouter = express.Router();

loginRouter.get(routes.login, (req, res) => res.send("Login"));

export default loginRouter;
