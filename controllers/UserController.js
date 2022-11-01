//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const { DataTypes } = require('sequelize')
//el modelo
const UserModel = require('../models/user')
const user = require('../models/user')
//crear obtjeto usuario
const User = UserModel(sequelize,DataTypes)



//get: obtenetr datos
exports.traerUsers = async (req,res)=>{
    const users = await User.findAll();
    res.status(200).json(
        {
            "succes" : true,
            "data" : users
        }
    )
} 

//obtener recurso por id
exports.traerUserPorId = async (req, res)=>{
   const userId = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes" : true,
            "data" : userId
        }
    )
}

//POST : crear un nuevo recurso
exports.crearUser = async(req,res)=>{
    const newUser = await User.create(req.body)
res.status(201).json({
        "succes" : true,
        "data" : newUser
    })
}

//Put - PATCH:actualizar
exports.actualizarUser = async(req,res)=>{
    //actualizar usuario por id
    await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    //consultar datos actualizados
    const upUser = await User.findByPk(req.params.id)

res.status(200).json(
        {
            "succes" : true,
            "data" : upUser
        } 
    )
}


//delete
exports.borrarUser = async(req,res)=>{
    //buscar usuario por id
    const u = await User.findByPk(req.params.id)
    // Borrar usuario por id
await User.destroy({
    where: {
     id: req.params.id
    }
  });
res.status(200).json(
        {
            "succes" : true,
            "data" : u
        } 
    )
}
    

