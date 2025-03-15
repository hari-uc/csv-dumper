require("dotenv").config();
const express = require("express");
const app = express();

const logger = require("../utils/logger");
const apiWrapper = require("../helpers/apiWrapper");

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  return apiWrapper(res, {
    status: 200,
    message: "Working",
  });
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  logger.error(err);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  logger.error(err);
  process.exit(1);
});
