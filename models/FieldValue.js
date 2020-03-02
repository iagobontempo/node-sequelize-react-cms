const { Model, DataTypes } = require('sequelize');

class FieldValue extends Model {
    static init(connection) {
        super.init({
            parent_id: DataTypes.INTEGER,
            field_id: DataTypes.INTEGER,
            value: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = FieldValue;

// Importar models em database/index.js