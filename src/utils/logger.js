const { createLogger, transports, format } = require("winston");
const path = require("path");

const logDir = "logs"; 

function getLogFileName() {
  const currentDate = new Date().toISOString().slice(0, 10);
  return path.join(logDir, `${currentDate}.log`);
}



const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf((info) => `${info.level}: ${info.message}`)
      ),
      level: "debug",
    }),
    new transports.File({
      filename: getLogFileName(),
      format: format.combine(format.timestamp(), format.json()),
      level: "error",
    }),
  ],
});
module.exports = logger;
