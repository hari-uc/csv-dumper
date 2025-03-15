"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      order_id: {
        type: Sequelize.STRING(),
        primaryKey: true,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.STRING(),
        references: {
          model: "products",
          key: "product_id",
          onDelete: "CASCADE",
        },
      },
      customer_id: {
        type: Sequelize.STRING(),
        references: {
          model: "customers",
          key: "customer_id",
          onDelete: "CASCADE",
        },
      },
      delivery_address_id: {
        type: Sequelize.STRING(),
        references: {
          model: "customer_addresses",
          key: "address_id",
          onDelete: "CASCADE",
        },
      },
      purchased_at: {
        type: Sequelize.DATE,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      discount: {
        type: Sequelize.DECIMAL(5, 2),
        defaultValue: 0.0,
      },
      shipping_cost: {
        type: Sequelize.DECIMAL(10, 2)
      },
      total_price: {
        type: Sequelize.DECIMAL(10, 2),
      },
      region: {
        type: Sequelize.STRING(50),
      },
      status: {
        type: Sequelize.STRING(20)
      },
      payment_method: {
        type: Sequelize.STRING(50),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  },
};
