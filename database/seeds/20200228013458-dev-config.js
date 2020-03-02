'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('dev_configs', [{
      id: 1,
      tag_manager_head: "<<-- Paste tagManagerHead -->>",
      tag_manager_body: "<<-- Paste tagManagerBody -->>",
      message_host: "smpt.email.com",
      message_email: 'email@contact.com',
      message_password: 'password',
      message_port: 587,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dev_configs', null, {});
  }
};
