import express from "express";
import routes from "../../routes";
import { remove, edit } from "../../controller/controllers";

const v2Router = express.Router();

v2Router.get(routes.remove, remove);
v2Router.get(routes.edit, edit);

export default v2Router;
