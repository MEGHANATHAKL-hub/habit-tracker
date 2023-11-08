var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var apiRouter = require("./routes/index");

var app = express();

app.use(express.static(path.join(__dirname, "../static")));

app.use("/api", apiRouter);

module.exports = app;

