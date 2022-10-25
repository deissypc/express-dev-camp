const express = require('express')

const router = express.Router()

//establecer la rutas bootcamps

router.get('/',(req,res)=>{
    res.status(200).json(
        {
            "message" : "aqui se van a mostrar todos los usuarios"
        }
    )
} )

//obtener recurso por id
router.get('/:id',(req, res)=>{
res.status(200).json(
    {
        "message" : `aqui se van a mostrar todos los usuarios cuyo is es:${req.params.id}`
    }
)
})
//POST : crear un nuevo recurso
router.post('/',(req,res)=>{
res.status(201).json(
    {
        "menssage": "aqui va a crear el usuarios "
    }
)
})

//Put - PATCH:actualizar
router.put('/:id', (req,res)=>{
res.status(200).json(
    {
        "message" : `aqui se va a actualizar ussuario:${req.params.id}`
    } 
    )
})
//delete
router.delete('/:id', (req,res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a eliminar el usuario por id :${req.params.id}`
        } 
        )
})
//exportar el objecto router

module.exports=router

