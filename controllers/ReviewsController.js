//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const ReviewsModel = require('../models/reviews')
const reviews = require('../models/reviews')
//crear obtjeto usuario
const Review = ReviewsModel(sequelize,DataTypes)



//get: obtenetr datos
exports.traerReviews= async (req,res)=>{
    try {
        const reviews = await Review.findAll();
    res.status(200).json(
        {
            "succes" : true,
            "data" : reviews
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
exports.traerReviewPorId = async (req, res)=>{
    try {
        const reviewId = await Review.findByPk(req.params.id)
        //si usuario no existe
        if(!reviewId){
           res.status(422).json(
            {
                "success": false,
                "errors":[
                    " review no existe"
                ]
            }
           )
        }
        res.status(200).json(
            {
                "succes" : true,
                "data" : reviewId
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
exports.crearReviews = async(req,res)=>{
    try {
        const newReview = await Review.create(req.body)
        res.status(201).json({
                "succes" : true,
                "data" : newReview
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
exports.actualizarReviews = async(req,res)=>{
    try {
         //consultar datos actualizados
    const upReview = await Review.findByPk(req.params.id)
    if(!upReview){
        //RESPONSE DE USUARIO NO ENTONYRADO
        res.status(422).json(
            {
                "success": false,
                "errors":[
                    "review no existe"
                ]
            }
           )
    }else{
 //actualizar usuario por id
 await Review.update(req.body, {
    where: {
        id: req.params.id
    }
});
    //seleccionar usuario actualizado
    const upReview = await Review.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes" : true,
            "data" : upReview
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
exports.borrarReview = async(req,res)=>{

    try {
        const deReview= await Review.findByPk(req.params.id)
        if(!deReview){
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
            await Review.destroy({
                where: {
                 id: req.params.id
                }
              });
              const deReview = await Review.findByPk(req.params.id)
              res.status(200).json(
                  {
                      "succes" : true,
                      "data" : deReview
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
    

