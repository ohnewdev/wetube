import express from "express";
import routes from "../routes";
import v1Router from "./api/v1Router";
import v2Router from "./api/v2Router";
import { documentation } from "../controller/controllers";

const apiRouter = express.Router();
apiRouter.get(routes.documentation, documentation);
apiRouter.use(routes.v1, v1Router);
apiRouter.use(routes.v2, v2Router);

export default apiRouter;
