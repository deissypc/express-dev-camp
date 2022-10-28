const sequelize = require ('./seq')
const colors = require('colors')


//crear  funcion asyncrona para conexion
const connectDB = async ()=>{
    try{
        await sequelize.authenticate()
        console.log("conexion establecida exitosamente".bgMagenta.white)
        //seleccionar los users:
        //const users = await User.findAll();
        //onsole.log(users)
        // Crer un usuario
        //const jane = await User.create({ name: "Jane", email: "Jane@gmail.com", password:"1234" });
        //console.log("Jane's auto-generated ID:", jane.id);


    } catch(error){
        console.error(error)
    }
    
}

module.exports = connectDB