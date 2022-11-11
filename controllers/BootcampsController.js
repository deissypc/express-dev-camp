//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const BootcampModel = require('../models/bootcamp')
const bootcamp = require('../models/bootcamp')
//crear obtjeto usuario
const Bootcamp = BootcampModel(sequelize,DataTypes)



//get: obtenetr datos
exports.traerBootcamps = async (req,res)=>{
    try {
        const bootcamps = await Bootcamp.findAll();
    res.status(200).json(
        {
            "succes" : true,
            "data" : bootcamps
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
exports.traerBootcampPorId = async (req, res)=>{
    try {
        const bootcampId = await User.findByPk(req.params.id)
        //si usuario no existe
        if(!bootcampId){
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
                "data" : bootcampId
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
exports.crearBootcamp = async(req,res)=>{
    try {
        const newBootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
                "succes" : true,
                "data" : newBootcamp
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
exports.actualizarBootcamps = async(req,res)=>{
    try {
         //consultar datos actualizados
    const upBootcamp = await Bootcamp.findByPk(req.params.id)
    if(!upBootcamp){
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
 await Bootcamp.update(req.body, {
    where: {
        id: req.params.id
    }
});
    //seleccionar usuario actualizado
    const upBootcamp = await Bootcamp.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes" : true,
            "data" : upBootcamp
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
exports.borrarBootcamps = async(req,res)=>{

    try {
        const deBootcamp= await Bootcamp.findByPk(req.params.id)
        if(!deBootcamp){
            //RESPONSE DE USUARIO NO ENTONYRADO
            res.status(422).json(
                {
                    "success": false,
                    "errors":[
                        "bootcamp no existe"
                    ]
                }
               )
        }else{
            await Bootcamp.destroy({
                where: {
                 id: req.params.id
                }
              });
          }
              
        }
     catch (error) {
        res
        .status(500)
        .json({
           "sucess":false,
           "errors": "error de servidor"
        })
    }
}
    


    

