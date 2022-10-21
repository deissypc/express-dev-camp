const express = require('express')

const router = express.Router()
//establecer la rutas bootcamps

router.get('/',(req,res)=>{
        res.status(200).json(
            {
                "message" : "aqui se van a mostrar todos los bootcamps"
            }
        )
    } )

//obtener recurso por id
router.get('/:id',(req, res)=>{
    res.status(200).json(
        {
            "message" : `aqui se van a mostrar todos los bootcamps cuyo is es:${req.params.id}`
        }
    )
})
//POST : crear un nuevo recurso
router.post('/',(req,res)=>{
    res.status(201).json(
        {
            "menssage": "aqui va a crear el bootcamps "
        }
    )
})

//Put - PATCH:actualizar
router.put('/:id', (req,res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a actualizar:${req.params.id}`
        } 
        )
})
//delete
router.delete('/api/v1/bootcamps/:id', (req,res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a eliminar el bootcamps por id :${req.params.id}`
        } 
        )
})

//exportar el objecto router

module.exports=router

