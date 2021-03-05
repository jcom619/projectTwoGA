'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jokes_archive extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  jokes_archive.init({
    joke_content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jokes_archive',
  });
  return jokes_archive;
};