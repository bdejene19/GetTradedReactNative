const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config/connection");
class WorkImage extends Model {}

WorkImage.init(
  {
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "user_id",
      },
      allowNull: false,
    },
    image_id: {
      type: DataTypes.INTEGER,
    },
    file_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "work_images",
  }
);

module.exports = WorkImage;
