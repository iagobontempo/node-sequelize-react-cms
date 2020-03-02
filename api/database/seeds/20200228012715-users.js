'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      id: 1,
      name: 'Dev',
      email: 'dev@dev.com',
      password: '$2a$10$DBZm9EbMFtdyci0iGgqTE.nfTBL/VszkFWOX0KQd.NbnobHw1SHNu',
      admin: true,
      dev: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 2,
      name: 'Admin',
      email: 'admin@admin.com',
      password: '$2a$10$DBZm9EbMFtdyci0iGgqTE.nfTBL/VszkFWOX0KQd.NbnobHw1SHNu',
      admin: true,
      dev: false,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
