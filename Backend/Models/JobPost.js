const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class JobPost extends Model {}

JobPost.init(
  {
    job_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.NUMBER,
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
    createdAt: true,
    modelName: "job_post",
  }
);

module.exports = JobPost;
