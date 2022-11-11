const express = require('express')
const{ traerBootcamps ,
    traerBootcampPorId,
    crearBootcamp,
    actualizarBootcamps,
    borrarBootcamps
    } = require('../../controllers/BootcampsController')

const router = express.Router()

//rutas usuario
router.route('/')
            .get(traerBootcamps)
            .post(crearBootcamp)

router.route('/:id')
            .get(traerBootcampPorId)
            .put(actualizarBootcamps)
            .delete( borrarBootcamps)







module.exports=router