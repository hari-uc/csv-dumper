"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
      // define association here
    }
  }

  order.init(
    {
      order_id: {
        type: DataTypes.STRING(),
        primaryKey: true,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.STRING(),
        references: {
          model: "products",
          key: "product_id",
          onDelete: "CASCADE",
        },
      },
      customer_id: {
        type: DataTypes.STRING(),
        references: {
          model: "customers",
          key: "customer_id",
          onDelete: "CASCADE",
        },
      },
      delivery_address_id: {
        type: DataTypes.STRING(),
        references: {
          model: "customer_addresses",
          key: "address_id",
          onDelete: "CASCADE",
        },
      },
      purchased_at: {
        type: DataTypes.DATE,
      },
      quantity: {
        type: DataTypes.INTEGER
      },
      discount: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0.0,
      },
      shipping_cost: {
        type: DataTypes.DECIMAL(10, 2)
      },
      total_price: {
        type: DataTypes.DECIMAL(10, 2),
      },
      region: {
        type: DataTypes.STRING(50),
      },
      payment_method: {
        type: DataTypes.STRING(50),
      },
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
