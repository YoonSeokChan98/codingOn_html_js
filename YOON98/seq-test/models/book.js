const { DataTypes } = require('sequelize');

const book = (seq) => {
    return seq.define('book', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(31),
            allowNull: false
        },
        author: {
            type: DataTypes.STRING(31),
            allowNull: false
        },
        date: {
            type: DataTypes.STRING(31),
            allowNull: false,
        }
    });
};

module.exports = book
