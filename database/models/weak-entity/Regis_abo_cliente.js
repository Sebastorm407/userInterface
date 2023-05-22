const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Regis_abo_cliente extends Model {}
Regis_abo_cliente.init(
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
        modelName: "regis_abo_cliente",
        timestamps: false
    }
)

module.exports = Regis_abo_cliente;