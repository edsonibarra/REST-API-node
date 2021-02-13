'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.cliente,{
        through: "clienteclases",
        foreignKey:"id_clase"
      });
    };
  };
  clase.init({
    nombre: DataTypes.STRING,
    nombre_instructor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clase',
  });
  return clase;
};