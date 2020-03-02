const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig.js')

// Importar models
// Models
const User = require('../models/User');
const Config = require('../models/Config');
const DevConfig = require('../models/DevConfig');
const Field = require('../models/Field');
const FieldValue = require('../models/FieldValue');
const InternalPage = require('../models/InternalPage');
const Page = require('../models/Page');

const connection = new Sequelize(dbConfig);

// Iniciar models
User.init(connection);
Config.init(connection);
DevConfig.init(connection);
Field.init(connection);
FieldValue.init(connection);
InternalPage.init(connection);
Page.init(connection);

module.exports = connection;