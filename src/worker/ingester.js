const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { customer, product, order, customer_address } = require("../models");
const { fieldMapper } = require("../helpers/mappers");
const logger = require("../utils/logger");

const csvFilePath = path.join(__dirname, "..", "..", "sample.csv");

async function ingestData() {
  try {
    if (!fs.existsSync(csvFilePath)) {
      logger.error("File not found");
      return;
    }
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", async (row) => {
        const {
          customer: mappedCustomer,
          product: mappedProduct,
          order: mappedOrder,
          customer_address: mappedCustomerAddress,
        } = fieldMapper(row);
        try {
          await customer.upsert(mappedCustomer);
          await product.upsert(mappedProduct);
          await customer_address.upsert(mappedCustomerAddress);
          await order.upsert(mappedOrder);
          logger.info("Data Ingested");
        } catch (error) {
          logger.error("Error in data ingestion", error);
        }
      })
      .on("end", () => {
        logger.debug("CSV file successfully processed");
      });
  } catch (error) {
    logger.error("Error in ingest data", error);
  }
}

module.exports = ingestData;
