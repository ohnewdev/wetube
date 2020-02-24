// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import hwRouter from "./routers/hwRouter";
// import globalRouter from "./routers/globalRouter";
// import profileRouter from "./routers/profileRouter";
// import photosRouter from "./routers/photosRouter";
// import loginRouter from "./routers/loginRouter";

// import userRouter from "./routers/userRouter";
// import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localMiddleware } from "./localMiddleware";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localMiddleware);

app.use("/", hwRouter); // home
app.use(routes.login, hwRouter); // home
app.use(routes.photos, hwRouter); // home
app.use(routes.profile, hwRouter); // home
// app.use(routes.login, loginRouter); //homework8
// app.use(routes.photos, photosRouter); //homework8
// app.use(routes.profile, profileRouter); //homework8

// app.use(routes.users, userRouter);

// app.use("/videos", videoRouter);
// app.use(routes.videos, videoRouter);

export default app;
