const { Model, DataTypes } = require('sequelize');

class InternalPage extends Model {
    static init(connection) {
        super.init({
            parent_id: DataTypes.INTEGER,
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

module.exports = InternalPage;

// Importar models em database/index.js