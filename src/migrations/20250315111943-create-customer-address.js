'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer_addresses', {
      address_id: {
        type: Sequelize.STRING(),
        primaryKey: true,
        allowNull: false
      },
      customer_id: {
        type: Sequelize.STRING(),
        allowNull: false,
        references: {
          model: 'customers',
          key: 'customer_id',
          onDelete: 'CASCADE'
        }
      },
      is_primary: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      door: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      street: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      postal_code: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      region: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      status: {
        type: Sequelize.STRING(20),
        defaultValue: 'active'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customer_addresses');
  }
};