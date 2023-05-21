const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db.js');

class Links extends Model {}
Links.init(
    {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo no puede ser nulo"
                }
            }
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo no puede ser nulo"
                }
            }
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo no puede ser nulo"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "links",
        timestamps: false
    })

module.exports = Links;