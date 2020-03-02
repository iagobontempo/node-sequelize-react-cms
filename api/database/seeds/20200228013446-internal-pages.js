'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Internal_pages', [{
      id: 1,
      parent_id: 1,
      name: 'Internal Page 1',
      uri: 'internal-page-1',
      seo_title: null,
      seo_description: null,
      deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 2,
      parent_id: 1,
      name: 'Internal Page 2',
      uri: 'internal-page-2',
      seo_title: null,
      seo_description: null,
      deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 3,
      parent_id: 1,
      name: 'Internal Page 3',
      uri: 'internal-page-3',
      seo_title: null,
      seo_description: null,
      deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 4,
      parent_id: 2,
      name: 'Internal Page Other Parent 2',
      uri: 'internal-page-other-1',
      seo_title: null,
      seo_description: null,
      deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 5,
      parent_id: 2,
      name: 'Internal Page Other Parent 2',
      uri: 'internal-page-other-2',
      seo_title: null,
      seo_description: null,
      deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Internal_pages', null, {});
  }
};
