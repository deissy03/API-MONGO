
import ModeloProducto from "../model/modeloProducto.js";
 const ControladorProductos ={
    crearProducto:async(solicitud, respuesta)=>{
       
        try{
            const nuevoProducto= new ModeloProducto(solicitud.body);
            const productoCreado= await nuevoProducto.save();
             
            if(productoCreado._id){
                respuesta.json({
                    resultado: "bien",
                    mensaje: "se creo el producto",
                    datos: productoCreado._id
                });

            }         
        }catch(error){
            respuesta.json({
                resultado: "mal",
                mensaje: "ocurrió un error al crear el producto",
                datos: error
              });
        }
    },
    leerProducto: async (solicitud, respuesta) => {
        try {
          const ProductoEncontrado = await ModeloProducto.findById(
            solicitud.params.id
          );
          if (ProductoEncontrado._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'Producto leído',
              datos: ProductoEncontrado,
            });
          }
        } catch (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al leer Producto',
            datos: error,
          });
        }
      },
      leerProductos: async (solicitud, respuesta) => {
        try {
          const todosLosProductos = await ModeloProducto.find();
          respuesta.json({
            resultado: 'bien',
            mensaje: 'Productos leídos',
            datos: todosLosProductos,
          });
        } catch (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al leer todos los Productos',
            datos: error,
          });
        }
      },
      actualizarProducto: async (solicitud, respuesta) => {
        try {
          const ProductoActualizado = await ModeloProducto.findByIdAndUpdate(
            solicitud.params.id,
            solicitud.body
          );
          if (ProductoActualizado._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'Producto actualizado',
              datos: ProductoActualizado._id,
            });
          }
        } catch (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al actualizar Producto',
            datos: error,
          });
        }
      },
      eliminarProducto: async (solicitud, respuesta) => {
        try {
          const ProductoEliminado = await ModeloProducto.findByIdAndDelete(
            solicitud.params.id
          );
          if (ProductoEliminado._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'Producto eliminado',
              datos: null,
            });
          }
        } catch (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al eliminar Producto',
            datos: error,
          });
        }
      }
}
 export default ControladorProductos; 