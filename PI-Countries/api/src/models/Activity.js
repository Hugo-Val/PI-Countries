const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        difficulty: {
        type: DataTypes.ENUM("1","2","3","4","5"),
        allowNull: false,
        },
        duration: {
        type: DataTypes.DATE,
        allowNull: false,
        },
        season: {
        type: DataTypes.ENUM("spring", "summer", "autumn", "winter"),
        allowNull: false,
        },
    });
}