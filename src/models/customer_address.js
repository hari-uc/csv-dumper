'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer_address extends Model {

    static associate(models) {
      // define association here
    }
  }

  customer_address.init({
    address_id: {
      type: DataTypes.STRING(),
      primaryKey: true,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.STRING(),
      allowNull: false,
      references: {
        model: 'customers',
        key: 'customer_id',
        onDelete: 'CASCADE'
      }
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    door: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: 'active'
    }

  }, {
    sequelize,
    modelName: 'customer_address',
  });
  return customer_address;
};