const { DataTypes } = require('sequelize');

const rental = (seq) => {
    return seq.define('rental', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        bookId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'books',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        rentalDate: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        returnDate: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
    });
};

module.exports = rental
