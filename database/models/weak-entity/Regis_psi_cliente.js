const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Regis_psi_cliente extends Model {}
Regis_psi_cliente.init(
    {
        fecha_ini: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar la fecha inicio"
                }
            }
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar la fecha fin"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "regis_psi_cliente",
        timestamps: false
    }
)

module.exports = Regis_psi_cliente;