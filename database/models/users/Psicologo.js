const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Psicologo extends Model {}
Psicologo.init(
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
        }
    },
    {
        sequelize,
        modelName: "psicologo",
        timestamps: false
    }
)

module.exports = Psicologo;