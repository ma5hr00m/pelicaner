const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './sqlite.db'
});

try {
    sequelize.authenticate();
    console.log(`Connect to database successfully`);
} catch (err) {
    console.log(`Connection failed: ${err}`);
}

module.exports = { sequelize };