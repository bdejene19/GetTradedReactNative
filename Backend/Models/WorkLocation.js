const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class WorkLocation extends Model {}

WorkLocation.init(
  {
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "user_id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
