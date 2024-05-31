import { Router } from "express"; //importamos ruta
import ControladorProductos from "../controller/controladorProductos.js"; 

const enrutadorProductos = Router(); 
enrutadorProductos.post('/', ControladorProductos.crearProducto);
enrutadorProductos.get('/:id', ControladorProductos.leerProducto); 
enrutadorProductos.get('/', ControladorProductos.leerProductos);
enrutadorProductos.put('/:id', ControladorProductos.actualizarProducto);
enrutadorProductos.delete('/:id', ControladorProductos.eliminarProducto);

  export default enrutadorProductos;