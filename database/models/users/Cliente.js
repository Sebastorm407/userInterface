const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Cliente extends Model {}
Cliente.init(
    {
        clave: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa una clave"
                },
                isDecimal: {
                    msg: "La clave debe ser un numero entero o una palabra"
                }
            }
        },
        nivel_academico: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa tu nivel academico"
                }
            }
        },
        ocupacion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa a que te dedicas"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "cliente",
        timestamps: false
    }
)

module.exports = Cliente;