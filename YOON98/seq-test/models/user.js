const { DataTypes } = require('sequelize');

const user = (seq) => {
    return seq.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(31),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(127),
            allowNull: false,
        }
    });
};

module.exports = user
