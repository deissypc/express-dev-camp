'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
     type: DataTypes.STRING,
     allowNull: false,
     unique: true,
     validate:{
      isAlpha:{
        args: true,
        msg: 'Name solo debe tener letras'
      },
      notEmpty: {
        args: true,
        msg: 'campo no puede quedar vacio'
      },
      notNull: {
        args: true,
        msg: 'campo no puede quedar vacio'
      },
     } 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail:{
          args: true,
          msg: 'email debe escribirse @gmail.com'
        },  
        notEmpty: {
          args: true,
          msg: 'email no puede quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'email no puede quedar vacio'
        },
       } 
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        len:{
          args: [5,10],
          msg: 'contraseña de 5 a 10'
        } 

       } 
    } 
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};