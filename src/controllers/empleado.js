import empleado from "../modules/empleado";
import bcrypt from "bcrypt"
import path from "path";
import fs from "fs";

export const listarEmpleado = async (req, res) => {
    const list = await empleado.findAll()

    if(list.length > 0) {
      res.send({list})
    }
    else{
     res.status(200).send({status: 'no data', message: 'no data in list'})
    }
    
}

export const buscarEmpleado = async (req,res)=>{
  try {
        const { idEmpleado } = req.body
        const empleadoEncontrado = await empleado.findByPk(idEmpleado)
        
        if(empleadoEncontrado){
            res.status(200).send({ message: 'user found', user: empleadoEncontrado })
        } else {
            res.status(404).send({ message: 'user not found' })
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error finding user' })
    }
}


export const crearEmpleado = async (req, res) => {
    try {
      // Recibe los datos del usuario en el body de la solicitud
      const { tipoEmpleado, nombreEmpleado, apellidoEmpleado ,tipoDocumento, numeroDocumento, cargo, RH, estado } = req.body;

  
      // Crea un nuevo usuario en la base de datos
      const nuevoEmpleado = await empleado.create({
        tipoEmpleado,
        nombreEmpleado,
        apellidoEmpleado,
        tipoDocumento,
        numeroDocumento,
        cargo, // Agrega el path de la foto si existe
        RH,
        estado
       
      });
  
      // Envía una respuesta exitosa si el usuario se creó correctamente
      res.send({ message: "Empleado Creado", user: nuevoEmpleado });
  
    } catch (error) {
      // Envía una respuesta de error en caso de fallo
      res.status(500).send({ message: "Error", error: error.message });
    }
  };

  export const editarEmpleado = async (req,res)=>{
    try{
    
    const { idEmpleado ,tipoEmpleado, nombreEmpleado, apellidoEmpleado ,tipoDocumento, numeroDocumento, cargo, RH, estado} = req.body;
    
    const buscarEmpleado = await empleado.findByPk(idEmpleado);
    
    
    if(buscarEmpleado) {
      buscarEmpleado.tipoEmpleado = tipoEmpleado,
      buscarEmpleado.nombreEmpleado = nombreEmpleado,
      buscarEmpleado.apellidoEmpleado = apellidoEmpleado,
      buscarEmpleado.tipoDocumento = tipoDocumento,
      buscarEmpleado.numeroDocumento = numeroDocumento,
      buscarEmpleado.cargo = cargo,
      buscarEmpleado.RH = RH,
      buscarEmpleado.estado = estado
      await buscarEmpleado.save();
      res.send({ message: "empleado editado", user: buscarEmpleado });
 
    }
    else{

      res.send({ message: "error", user: 'id not found' });
    }

   }
   catch (error){

    res.status(500).send({ message: "Error", error: error.message });
   }

  }

  
  export const inactivarEmpleado = async (req, res) => {
    try {
      const { idEmpleado } = req.body;
      const empleado = await empleado.findByPk(idEmpleado); // Asegurarse que se espera el resultado con await
      
      if (empleado) {
        empleado.estado = false;
        await user.save()
        res.status(200).send({ message: 'Empleado inactivado', empleado: empleado })
      }
        
  
        
    } catch (error) {
      console.error('Error al desabilitar el usuario:', error);
      res.status(500).send({ message: 'Error inactive user', error: error.message });
    }
  };

  export const activarEmpleado = async (req, res) => {
    try {
      const { idEmpleado } = req.body;
      
      const empleado = await empleado.findByPk(idEmpleado); // Asegurarse que se espera el resultado con await
      
      if (empleado) {
        empleado.estado = false;
        await user.save()
        res.status(200).send({ message: 'Empleado activado', empleado: empleado })
      }
        
  
        
    } catch (error) {
      console.error('Error al activar el usuario:', error);
      res.status(500).send({ message: 'Error active user', error: error.message });
    }
  };
  

  

