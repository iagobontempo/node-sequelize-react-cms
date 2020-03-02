const { Model, DataTypes } = require('sequelize');

class Page extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            uri: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            seo_title: DataTypes.STRING(60),
            seo_description: DataTypes.STRING(170),
            deleted: DataTypes.BOOLEAN,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Page;

// Importar models em database/index.js