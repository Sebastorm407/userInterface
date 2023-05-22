const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Persona extends Model {}
Persona.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa tu nombres"
                }
            }
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa tus apellidos"
                }
            }
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: "Ingresa una direccion de correo"
                },
                notNull: {
                    msg: "Este no puede ser un campo vacio"
                }
            }
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa un numero de telefono"
                }
            }
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa tu edad"
                }
            }
        },
        estrato: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa tu estrato"
                }
            }
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa una direccion de vivienda"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "persona",
        timestamps: false
    }
)

module.exports = Persona;