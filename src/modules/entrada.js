
import Sequelize from "sequelize";
import {sequelize} from "data.js";
import { DataTypes } from "sequelize";
import { models } from "./associations";
import usuario from "./empleado";
import salida from "./salida";

const entrada = sequelize.define('entrada',{

    idEntrada :{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoEntrada: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    fechaEntrada :{
        type: sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    horaEntrada: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }


})
entrada.associate = (models)=>{

    entrada.belongsTo(models.empleado, {
        foreignKey: 'empleadoId',
        as: 'idEmpleado',
        allowNull: false,
    })
}

export default entrada;