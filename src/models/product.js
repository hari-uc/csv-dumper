"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate(models) {
      // define association here
    }
  }

  product.init(
    {
      product_id: {
        type: DataTypes.STRING(),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
      },
      category: {
        type: DataTypes.STRING(50),
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: null,
      },
      discount: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0.0,
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
