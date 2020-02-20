// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

// // respond with "hello world" when a GET request is made to the homepage
// app.get("/", function(req, res) {
//   res.send("hello world");
// });

const PORT = 4000;
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from Home!!");

const handleProfile = (req, res) => res.send("You are on my profile!!");

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(morgan("dev"));
app.use(betweenHome);

const middleware = (req, res, next) => {
  res.send("not happening");
};

app.get("/", handleHome);

app.get("/profile", handleProfile);
app.listen(4000, handleListening);
