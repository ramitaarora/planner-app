const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class YearlyGoals extends Model {}

YearlyGoals.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        yearly_goal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'yearlyGoals'
    }
);

module.exports = YearlyGoals;