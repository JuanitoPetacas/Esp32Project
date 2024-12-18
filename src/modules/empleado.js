import { sequelize } from "data.js";
import { DataTypes } from "sequelize";


const empleado = sequelize.define('empleado', {

    idEmpleado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TipoEmpleado: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    nombreEmpleado:{
        type: DataTypes.STRING(200),
        allowNull: false
    },
    apellidoEmpleado:{
        type: DataTypes.STRING(200),
        allowNull: false
    },
    tipoDocumento:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    numeroDocumento:{
        type: DataTypes.BIGINT,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    RH: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }



    
})
empleado.associate = (models)=>{

    empleado.hasMany(models.entrada,{
        foreignKey:{
          allowNull: false,
        }
      })

      empleado.hasMany(models.output,{
        foreignKey:{
          allowNull: false,
        }
      })
}

export default empleado;