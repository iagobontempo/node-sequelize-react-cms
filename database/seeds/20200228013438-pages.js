'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pages', [{
      id: 1,
      name: 'Page 1',
      uri: 'page-one',
      status: true,
      deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 2,
      name: 'Page 2',
      uri: 'page-two',
      status: true,
      deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 3,
      name: 'Page 3',
      uri: 'page-three',
      status: true,
      deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pages', null, {});
  }
};
