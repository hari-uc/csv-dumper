const logger = require("../utils/logger");
const ingestData = require("./ingester");
const cron = require("node-cron");

// ingestData();

logger.info("Starting worker");


cron.schedule("*/5 * * * *", async () => { // every 5 min
  logger.info("Running corn");
  await ingestData();
});

process.on("unhandledRejection", (error) => {
  logger.error("unhandledRejection", error);
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  logger.error("uncaughtException", error);
  process.exit(1);
});
