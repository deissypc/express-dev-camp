//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const UserModel = require('../models/user')
const user = require('../models/user')
//crear obtjeto usuario
const User = UserModel(sequelize,DataTypes)



//get: obtenetr datos
exports.traerUsers = async (req,res)=>{
    try {
        const users = await User.findAll();
    res.status(200).json(
        {
            "succes" : true,
            "data" : users
        }
    )
    } catch (error) {
        res
        .status(500)
        .json({
           "sucess":false,
           "errors": "error de servidor"
        })
    }
    
} 

//obtener recurso por id
exports.traerUserPorId = async (req, res)=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //si usuario no existe
        if(!userId){
           res.status(422).json(
            {
                "success": false,
                "errors":[
                    "usuario no existe"
                ]
            }
           )
        }
        res.status(200).json(
            {
                "succes" : true,
                "data" : userId
            }
        )
    } catch (error) {
        res
        .status(500)
        .json({
           "sucess":false,
           "errors": "error de servidor"
        })
    }
 
}

//POST : crear un nuevo recurso
exports.crearUser = async(req,res)=>{
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
                "succes" : true,
                "data" : newUser
            })
    } catch (error) {
        if( error instanceof ValidationError){
        //poner mensajes de error en una variable
        const errores= error.errors.map((e)=> e.message)
        res
           .status(422)
           .json({
             "sucess": false,
             "errors": errores
           })
    }else{
    res
     .status(500)
     .json({
        "sucess":false,
        "errors": "error de servidor"
     })
    }
}
}

//Put - PATCH:actualizar
exports.actualizarUser = async(req,res)=>{
    try {
         //consultar datos actualizados
    const upUser = await User.findByPk(req.params.id)
    if(!upUser){
        //RESPONSE DE USUARIO NO ENTONYRADO
        res.status(422).json(
            {
                "success": false,
                "errors":[
                    "usuario no existe"
                ]
            }
           )
    }else{
 //actualizar usuario por id
 await User.update(req.body, {
    where: {
        id: req.params.id
    }
});
    //seleccionar usuario actualizado
    const upAct = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes" : true,
            "data" : upUser
        } 
    )
}
    }
    //enviar response con usuario actualizado
     catch (error) {
        res
     .status(500)
     .json({
        "sucess":false,
        "errors": "error de servidor"
     })
    }
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
    

