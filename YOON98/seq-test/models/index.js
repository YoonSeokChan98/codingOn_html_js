'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델
db.User = require('./user')(sequelize);
db.Book = require('./book')(sequelize);
db.Rental = require('./rental')(sequelize);

// 사용자와 대여기록 1:다 연결
db.User.hasMany(db.Rental, { foreignKey: 'userId', onDelete: 'CASCADE' });
db.Rental.belongsTo(db.User, { foreignKey: 'userId', onDelete: 'CASCADE' });

// 도서와 대여기록 1:다 연결
db.Book.hasMany(db.Rental, { foreignKey: 'bookId', onDelete: 'CASCADE' });
db.Rental.belongsTo(db.Book, { foreignKey: 'bookId', onDelete: 'CASCADE' });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
