const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comic extends Model {}

Comic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    super_hero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comic",
  }
);

module.exports = Comic;
