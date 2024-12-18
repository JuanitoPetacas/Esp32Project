import { sequelize } from "./data.js";
import { DataTypes } from "sequelize";

const usuario = sequelize.define('usuario',{

    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreUsuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    numeroDocumento: {
        type: DataTypes.BIGINT,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }

})

export default usuario;