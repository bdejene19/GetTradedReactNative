const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class WorkLocation extends Model {}

WorkLocation.init(
  {
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "user_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "work_locations",
  }
);

module.exports = WorkLocation;
