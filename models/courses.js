'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
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
    description:{
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
    weeks:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
        isNumeric:{
          args: true,
          msg: 'weeks solo debe tener numeros'
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
    enroll_cost:{
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true,
      validate:{
        isNumeric:{
          args: true,
          msg: 'enrroll solo debe tener numeros'
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
    minimum_skill:{
    type: DataTypes.INTEGER,
    allowNull: false,
      unique: true,
      validate:{
        isNumeric:{
          args: true,
          msg: 'minimun solo debe tener numeros'
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
          msg: 'bootcamps solo debe tener numeros'
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
    modelName: 'Courses',
    timestamps: false
  });
  return Courses;
};