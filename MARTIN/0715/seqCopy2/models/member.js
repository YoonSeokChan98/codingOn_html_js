const {DataTypes}=require('sequelize')

const member=(seq)=>{
    return seq.define('member',{
        // 컬럼 정의
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userid:{
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        pw:{
            type: DataTypes.STRING(127),
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING(31),
            allowNull: false
        }
    })
}

module.exports = member;