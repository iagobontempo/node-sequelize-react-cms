const { Model, DataTypes } = require('sequelize');

class DevConfig extends Model {
    static init(connection) {
        super.init({
            tag_manager_head: DataTypes.STRING,
            tag_manager_body: DataTypes.STRING,
            message_host: DataTypes.STRING,
            message_email: DataTypes.STRING,
            message_password: DataTypes.STRING,
            message_port: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = DevConfig;

// Importar models em database/index.js