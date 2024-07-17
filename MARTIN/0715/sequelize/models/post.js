const {DataTypes} = require('sequelize');

const post = (seq)=>{
    return seq.define('post',{
        // 컬럼 정의
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        content: DataTypes.TEXT('medium'),
    });
};

module.exports = post
