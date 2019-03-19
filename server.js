const express = require("express");

const postsRouter = require("./routers/postsRouter.js");

const server = express();
server.use(express.json());

server.use("/api/posts", postsRouter);

module.exports = server;
