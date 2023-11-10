const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'id',
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            isEmpty: false,
            field: 'title',
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
            isEmpty: false,
            field: 'url',
        },
        sort: {
            type: DataTypes.TEXT,
            allowNull: false,
            isEmpty: false,
            field: 'sort',
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            isEmpty: false,
            field: 'description',
        }
    });
}