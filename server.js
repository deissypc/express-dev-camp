//dependencias
const bootcampRoutes =require('./config_env/routes/BootcampRoutes')
const UserRoutes=require('./config_env/routes/UserRoutes')
const express = require('express')
const dotenv = require('dotenv')
const collors = require('colors')

//dependencia a la conexion a base de datos
const connectDB = require('./config/db')

//establecer el archivo de configuracion con variables de entono
dotenv.config({
 path:'./config_env/config.env'
})

//1.Crear el Objeto app 
const app =express()

//ejecutar conexion a base d datos
connectDB()

app.use('/api/v1/bootcamps', bootcampRoutes )
app.use('/api/v1/users', UserRoutes)


//3.metodo listen:ejecutar servidor
app.listen(process .env.port, ()=>{
 console.log(`Servidor Iniciado en puerto: ${process.env.port}`.bgBlack.blue)

})
