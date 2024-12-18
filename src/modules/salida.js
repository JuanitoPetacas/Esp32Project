
import Sequelize from "sequelize";
import {sequelize} from "data.js";
import { DataTypes } from "sequelize";

const salida = sequelize.define('salida',{

    idSalida :{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoSalida: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    fechaSalida :{
        type: sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    horaSalida: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }


})

salida.associate = (models)=>{

    salida.belongsTo(models.empleado, {
        foreignKey: 'empleadoId',
        as: 'idEmpleado',
        allowNull: false,
    })
}
export default salida