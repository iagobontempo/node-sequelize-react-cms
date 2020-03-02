'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dev_configs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tag_manager_head: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tag_manager_body: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      message_host: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      message_email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      message_password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      message_port: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dev_configs');

  }
};
