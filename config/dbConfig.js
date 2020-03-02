module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '123456',
    database: 'node_js_api',
    define: {
        timestamps: true,
        underscored: true,
        // freezeTableName: true, // FreezeTableName é usado para não deixar que o sequelize pluralize os models com tabelas
    }
}



// dialect: 'mysql' // dialect: 'mariadb' //  dialect: 'postgres'//
// As bibliotecas estão no package.json 
// https://sequelize.org/v5/manual/dialects.html