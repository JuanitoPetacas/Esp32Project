import empleado from "../modules/empleado";
import entrada from "../modules/entrada";
import entrada from "../modules/entrada";


export const  listarEntradas = async (req,res)=>{
    const entradas = await entrada.findAll({
        include: [{model: empleado, as: 'empleado'}]
    })
    if(entradas.length > 0) {
        res.send({entradas})
      }
      else{
       res.status(200).send({status: 'no data', message: 'no data in list'})
      }
}

export const buscarEntrada = async (req, res) => {
    try {
        const {idEntrada} = req.boy;
    const entradas = await entrada.findByPk(idEntrada, {
        include: [{model: empleado, as: 'empleado'}]
    })

    if(entradas){
        res.status(200).send({message: "entrada encontrada", entrada: entradas})
    }
    else{
        res.status(404).send({message: "entrada no encontrada"})


    }
    } catch (error) {
        res.send({error: error.message})
        
    }
    
} 

export const generarEntrada = async (req,res) =>{
    try {
        const {tipoEntrada, fechaEntrada, horaEntrada}= req.body;

const entradas = await entrada.create({
    tipoEntrada,
    fechaEntrada,
    horaEntrada
})

res.status(200).send({message: "Entrada generada correctamente!", entrada: entradas})

        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
    



}