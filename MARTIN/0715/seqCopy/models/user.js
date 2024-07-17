const {DataTypes} = require('sequelize');

// user 테이블 만들기
const User = (sequelize)=>{
    return sequelize.define('user',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        pw: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    });
};

module.exports = User;