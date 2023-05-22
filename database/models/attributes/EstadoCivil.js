const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class EstadoCivil extends Model {}
EstadoCivil.init(
    {
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar tu estado civil"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "estado_civil",
        timestamps: false
    }
)

module.exports = EstadoCivil;