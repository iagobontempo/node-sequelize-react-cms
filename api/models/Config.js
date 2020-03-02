const { Model, DataTypes } = require('sequelize');

class Config extends Model {
    static init(connection) {
        super.init({
            site_name: DataTypes.STRING,
            site_title: DataTypes.STRING,
            logo: DataTypes.STRING,
            logo_footer: DataTypes.STRING,
            favicon: DataTypes.STRING,
            seo_description: DataTypes.STRING,
            whatsapp: DataTypes.STRING,
            phone: DataTypes.STRING,
            facebook: DataTypes.STRING,
            linkedin: DataTypes.STRING,
            youtube: DataTypes.STRING,
            email: DataTypes.STRING,
            instagram: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Config;

// Importar models em database/index.js