const apiWrapper = require("../../helpers/apiWrapper");
const { customer, product, order, customer_address } = require("../../models");
const logger = require("../../utils/logger");

exports.topNProducts = async (req, res) => {
  try {
    const { start, end } = req.query;

    let where = {};
    if (start && end) {
      where = {
        createdAt: {
          [sequelize.Op.gte]: start,
          [sequelize.Op.lte]: end,
        },
      };
    }

    const topProducts = await order.findAll({
      where,
      attributes: [
        "productId",
        [sequelize.fn("sum", sequelize.col("quantity")), "totalQuantity"],
      ],
      group: ["productId"],
      order: [[sequelize.literal("totalQuantity"), "DESC"]],
      limit: 10,
    });

    apiWrapper(res, {
      status: 200,
      message: "top products",
      data: topProducts,
    });
  } catch (error) {
    logger.error("Error in top prodcuts", error);
    apiWrapper(res, {
      status: 500,
      message: "Error in topNProducts",
      error,
    });
  }
};
