'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
    title: {
     type: DataTypes.STRING,
     allowNull: false,
     unique: true,
     validate:{
      isAlpha:{
        args: true,
        msg: 'title solo debe tener letras'
      },
      notEmpty: {
        args: true,
        msg: 'campo no puede quedar vacio'
      },
      notNull: {
        args: true,
        msg: 'campo no puede quedar vacio'
      }
     } 
    },
    text:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
      isAlpha:{
        args: true,
        msg: 'text solo debe tener letras'
      },
      notEmpty: {
        args: true,
        msg: 'campo no puede quedar vacio'
      },
      notNull: {
        args: true,
        msg: 'campo no puede quedar vacio'
      }
     } 
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true,
      validate:{
        isNumeric:{
          args: true,
          msg: 'raiting solo debe tener numeros'
        },
        notEmpty: {
          args: true,
          msg: 'campo no puede quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'campo no puede quedar vacio'
        }
       } 
      },
    bootcamp_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
        isNumeric:{
          args: true,
          msg: 'id solo debe tener numeros'
        },
        notEmpty: {
          args: true,
          msg: 'campo no puede quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'campo no puede quedar vacio'
        }
       } 
      },
    user_id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
        isNumeric:{
          args: true,
          msg: 'id solo debe tener numeros'
        },
        notEmpty: {
          args: true,
          msg: 'campo no puede quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'campo no puede quedar vacio'
        }
       } 
      }
  }, {
    sequelize,
    modelName: 'reviews',
    timestamps: false
  });
  return reviews;
};