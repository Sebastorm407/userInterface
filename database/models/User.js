const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db.js');

class User extends Model {}
User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo no puede ser nulo"
                }
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo no puede ser nulo"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo no puede ser nulo"
                }
            }
        },
        fullname: {
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
        modelName: "user",
        timestamps: false
    })

module.exports = User;