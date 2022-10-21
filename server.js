//dependencias
const bootcampRoutes =require('./config_env/routes/BootcampRoutes')
const express = require('express')
const dotenv = require('dotenv')
const collors = require('colors')

//dependencias
const bootcampsRoutes =require('./config_env/routes/BootcampRoutes')

//establecer el archivo de configuracion con variables de entono
dotenv.config({
 path:'./config_env/config.env'
})

//1.Crear el Objeto app 
const app =express()

app.use('/api/v1/bootcamps', bootcampRoutes )


//3.metodo listen:ejecutar servidor
app.listen(process .env.port, ()=>{
 console.log(`Servidor Iniciado en puerto: ${process.env.port}`.bgBlack.blue)

})
