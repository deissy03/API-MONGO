import express  from "express";
import morgan from"morgan"; 
import enrutadorProductos from "./routes/rutaProductos.js";




 const servidor= express();
 servidor.use(morgan("dev"));
 servidor.use(express.json);
 servidor.use("/Productos", enrutadorProductos);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
  
})

 export default servidor;