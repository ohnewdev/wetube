// const express = require("express");
import express from "express";
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

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(4000, handleListening);
