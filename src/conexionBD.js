import mongoose from "mongoose";

mongoose.connect(process.env.BASE_DATOS_PRODUCTOS).then((dato)=>{
    console.log("usted esta conectado a la base de datos");
}).catch((error)=>{
    console.log("ocurrio un error y no se conecto a la base de dato");
});