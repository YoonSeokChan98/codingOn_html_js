const { DataTypes } = require('sequelize');

const studentCourse = (seq) => {
    return seq.define('studenCourse', {
        studentId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'students',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        courseId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'courses',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
    });
};

module.exports = studentCourse;
