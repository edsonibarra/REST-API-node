'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.membresia,{
        foreignKey:"id_membresia"
      });

      this.belongsToMany(models.clase,{
        through: "clienteclases",
        foreignKey:"id_cliente"
      });

      this.hasMany(models.pago,{
        foreignKey:"id_cliente"
      });
    };
  };
  cliente.init({
    id_membresia: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};