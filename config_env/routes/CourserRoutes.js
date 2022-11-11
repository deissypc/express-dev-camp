const express = require('express')
const{ traerCourse,
    traerCourserPorId,
    crearCourse,
    actualizarCourser,
    borrarCourser
    } = require('../../controllers/CoursesController')

const router = express.Router()

//rutas usuario
router.route('/')
            .get(traerCourse)
            .post(crearCourse)

router.route('/:id')
            .get(traerCourserPorId)
            .put(actualizarCourser)
            .delete( borrarCourser)







module.exports=router