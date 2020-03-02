'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('configs', [{
      id: 1,
      site_name: "Site name",
      site_title: "Site title",
      whatsapp: "(62) 99999-9999",
      phone: "62 9999-9999",
      facebook: "http://facebook.com.br",
      linkedin: "http://linkedin.com.br",
      youtube: "http://youtube.com.br",
      instagram: "http://instagram.com.br",
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('configs', null, {});
  }
};
