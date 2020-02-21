import express from "express";
import routes from "../../routes";
import { buy, refund } from "../../controller/controllers";

const v1Router = express.Router();

v1Router.get(routes.buy, buy);
v1Router.get(routes.refund, refund);

export default v1Router;
