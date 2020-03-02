const { Model, DataTypes } = require('sequelize');

class Field extends Model {
    static init(connection) {
        super.init({
            parent_id: DataTypes.INTEGER,
            internal: DataTypes.INTEGER,
            type: DataTypes.STRING,
            name: DataTypes.STRING,
            label: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Field;

// Importar models em database/index.js