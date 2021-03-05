"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class saved_joke extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.saved_joke.belongsTo(models.user);
    }
  }
  saved_joke.init(
    {
      joke_content: DataTypes.STRING,
      rating: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "saved_joke",
    }
  );
  return saved_joke;
};
