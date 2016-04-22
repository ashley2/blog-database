"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const app = express();

const CONSTANTS = require("./config/constants");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', CONSTANTS.PORT);

app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));

const http = require('http');
require('mongoose').connect(CONSTANTS.MONGO_URL);

const server = http.createServer(app);
server.listen(CONSTANTS.PORT);
