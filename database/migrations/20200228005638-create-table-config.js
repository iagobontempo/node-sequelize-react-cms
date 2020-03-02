'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('configs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      site_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      site_title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      logo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      logo_footer: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      favicon: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      seo_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      whatsapp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      facebook: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      linkedin: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      youtube: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instagram: {
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
    return queryInterface.dropTable('configs');
  }
};
