import "dotenv/config";
import "./conexionBD.js";
import servidor from "./servidor.js";

servidor.listen(3000,()=>{
    console.log ("El servidor se esta corriendo en  http://localhost:3000");
});
