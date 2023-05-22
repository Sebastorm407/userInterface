//GENERAL MODEL
import User from "./User.js";

//ATTRIBUTE MODELS
import Ciudad from "./attributes/Ciudad.js";
import Departamento from "./attributes/Departamento.js";
import Discapacidad from "./attributes/Discapacidad.js";
import Enfermedad from "./attributes/Enfermedad.js";
import Eps from "./attributes/Eps.js";
import EstadoCivil from "./attributes/EstadoCivil.js";
import Pais from "./attributes/Pais.js";
import Rol from "./attributes/Rol.js";
import Sexo from "./attributes/Sexo.js";

//USERS MODELS

import Abogado from "./users/Abogado.js";
import Cliente from "./users/Cliente.js";
import Medico from "./users/Medico.js";
import Persona from "./users/Persona.js";
import Psicologo from "./users/Psicologo.js";

//WEAK_ENTITY MODELS

import Discapacidad_cliente from "./weak-entity/Discapacidad_cliente";
import Enfermedad_cliente from "./weak-entity/Enfermedad_cliente";
import Regis_abo_cliente from "./weak-entity/Regis_abo_cliente";
import Regis_med_cliente from "./weak-entity/Regis_med_cliente";
import Regis_psi_cliente from "./weak-entity/Regis_psi_cliente";

//ASSOCIATIONS

//PERSONA

Rol.hasMany(Persona)
Persona.belongsTo(Rol)

Eps.hasMany(Persona)
Persona.belongsTo(Eps)

EstadoCivil.hasMany(Persona)
Persona.belongsTo(EstadoCivil)

Sexo.hasMany(Persona)
Persona.belongsTo(Sexo)

Persona.hasMany(Abogado)
Abogado.belongsTo(Persona)

Persona.hasMany(Medico)
Medico.belongsTo(Persona)

Persona.hasMany(Psicologo)
Psicologo.belongsTo(Persona)

//CLIENTE

