const express = require('express')
const{traerReviews ,
    traerReviewPorId,
    crearReviews,
    actualizarReviews,
    borrarReview
    } = require('../../controllers/ReviewsController')

const router = express.Router()

//rutas usuario
router.route('/')
            .get(traerReviews)
            .post(crearReviews)

router.route('/:id')
            .get(traerReviewPorId)
            .put(actualizarReviews)
            .delete( borrarReview)







module.exports=router