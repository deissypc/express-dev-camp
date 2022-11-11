//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const CourseModel = require('../models/courses')
const course = require('../models/courses')
//crear obtjeto usuario
const Courser = CourseModel(sequelize,DataTypes)



//get: obtenetr datos
exports.traerCourse = async (req,res)=>{
    try {
        const courses = await Courser.findAll();
    res.status(200).json(
        {
            "succes" : true,
            "data" : courses
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
exports.traerCourserPorId = async (req, res)=>{
    try {
        const courserId = await Courser.findByPk(req.params.id)
        //si usuario no existe
        if(!courserId){
           res.status(422).json(
            {
                "success": false,
                "errors":[
                    " courser no existe"
                ]
            }
           )
        }
        res.status(200).json(
            {
                "succes" : true,
                "data" : courserId
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
exports.crearCourse = async(req,res)=>{
    try {
        const newCourse = await Courser.create(req.body)
        res.status(201).json({
                "succes" : true,
                "data" : newCourse
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
        "errors": error
     })
    }
}
}

//Put - PATCH:actualizar
exports.actualizarCourser = async(req,res)=>{
    try {
         //consultar datos actualizados
    const upCourser = await Courser.findByPk(req.params.id)
    if(!upCourser){
        //RESPONSE DE USUARIO NO ENTONYRADO
        res.status(422).json(
            {
                "success": false,
                "errors":[
                    "courser no existe"
                ]
            }
           )
    }else{
 //actualizar usuario por id
 await Courser.update(req.body, {
    where: {
        id: req.params.id
    }
});
    //seleccionar usuario actualizado
    const upCourser = await Courser.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes" : true,
            "data" : upCourser
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
exports.borrarCourser = async(req,res)=>{

    try {
        const deCourser= await Courser.findByPk(req.params.id)
        if(!deCourser){
            //RESPONSE DE USUARIO NO ENTONYRADO
            res.status(422).json(
                {
                    "success": false,
                    "errors":[
                        "courser no existe"
                    ]
                }
               )
        }else{
            await Courser.destroy({
                where: {
                 id: req.params.id
                }
              });
              const upCourser = await Courser.findByPk(req.params.id)
              res.status(200).json(
                  {
                      "succes" : true,
                      "data" : upCourser
                  } 
              )
          
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
    

